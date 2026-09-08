
import { SlashCommandBuilder } from 'discord.js';
import { buildProfileEmbed } from '../modules/profile/profile.js';
import { getDb } from '../utils/firestore.js';
import { logInfo, logError } from '../utils/logger.js';
export default { data: new SlashCommandBuilder().setName('profile').setDescription('Ver perfil con badges').addUserOption(o=>o.setName('usuario').setDescription('Usuario').setRequired(false)), async execute(inter:any){
 try{
  logInfo(`Comando /profile ejecutado por ${inter.user.tag} en guild ${inter.guildId}`);
  const user=inter.options.getUser('usuario')||inter.user;
  const db=getDb();
  const lvl=await db.collection('guilds').doc(inter.guildId).collection('levels').doc(user.id).get().catch((e:any)=>{logError('Profile: fallo get level',e); return null;});
  const inv=await db.collection('guilds').doc(inter.guildId).collection('invites').doc(user.id).get().catch(()=>null);
  const eco=await db.collection('guilds').doc(inter.guildId).collection('economy').doc(user.id).get().catch(()=>null);
  const stats={ level: lvl?.exists? lvl.data().level:0, xp: lvl?.exists? lvl.data().xp:0, messages: lvl?.exists? lvl.data().messages||0, invites: inv?.exists? inv.data().count:0, coins: eco?.exists? eco.data().coins:0, warns:0, strikes:0, roles:[], hadRoles:[] };
  const emb=await buildProfileEmbed(user, stats);
  await inter.reply({embeds:[emb], ephemeral:true});
  logInfo(`Profile: perfil enviado para ${user.tag}`);
 }catch(e:any){ logError('Profile: error comando', e); await inter.reply({content:'Error al obtener perfil - revisa logs', ephemeral:true}).catch(()=>{}); }
}};
