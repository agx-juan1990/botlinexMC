
import { SlashCommandBuilder } from 'discord.js';
import { brandEmbed } from '../utils/embeds.js';
import { getLeaderboard } from '../modules/leaderboard/leaderboard.js';
import { logInfo, logError } from '../utils/logger.js';
export default { data: new SlashCommandBuilder().setName('leaderboard').setDescription('Top LinexMC').addStringOption(o=>o.setName('tipo').setDescription('invites/mensajes/nivel/monedas').setRequired(true).addChoices({name:'Invites',value:'invites'},{name:'Mensajes',value:'mensajes'},{name:'Nivel',value:'nivel'},{name:'Monedas',value:'monedas'})), async execute(inter:any){
 try{
  const tipo=inter.options.getString('tipo');
  logInfo(`Comando /leaderboard tipo ${tipo} por ${inter.user.tag}`);
  const list=await getLeaderboard(inter.guildId, tipo);
  const desc=list.map((u:any,i:number)=>`**${i+1}.** <@${u.id}> - ${JSON.stringify(u.data).slice(0,60)}`).join('\n')||'Sin datos aun';
  const emb=brandEmbed().setTitle(`Leaderboard ${tipo}`).setDescription(desc);
  await inter.reply({embeds:[emb]});
  logInfo(`Leaderboard: enviado top ${tipo}`);
 }catch(e:any){ logError('Leaderboard: error comando', e); await inter.reply({content:'Error leaderboard - revisa logs', ephemeral:true}).catch(()=>{}); }
}};
