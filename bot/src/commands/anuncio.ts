
import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import { brandEmbed } from '../utils/embeds.js';
import { channels } from '../config/channels.js';
import { logInfo, logError } from '../utils/logger.js';
export default { data: new SlashCommandBuilder().setName('anuncio').setDescription('Enviar anuncio').addStringOption(o=>o.setName('tipo').setDescription('anuncios/estado/actualizacion/spoiler').setRequired(true).addChoices({name:'Anuncios',value:'anuncios'},{name:'Estado',value:'estado'},{name:'Actualizacion',value:'actualizacion'},{name:'Spoiler',value:'spoiler'})).addStringOption(o=>o.setName('texto').setDescription('Texto').setRequired(true)).setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages), async execute(inter:any){
 try{
  const tipo=inter.options.getString('tipo'); const texto=inter.options.getString('texto');
  logInfo(`Comando /anuncio tipo ${tipo} por ${inter.user.tag} - texto: ${texto.slice(0,50)}...`);
  const chId=(channels as any)[tipo]; const ch=inter.guild.channels.cache.get(chId);
  if(!ch){ logError(`Anuncio: canal ${tipo} (${chId}) no encontrado`); return inter.reply({content:`Canal ${tipo} no encontrado - ID ${chId} - verifica que existe`,ephemeral:true}); }
  const emb=brandEmbed().setTitle(tipo.toUpperCase()).setDescription(texto);
  await (ch as any).send({embeds:[emb]}).catch((e:any)=>{logError(`Anuncio: fallo enviar a ${chId}`,e); throw e;});
  await inter.reply({content:`Anuncio enviado a <#${chId}>`,ephemeral:true});
  logInfo(`Anuncio: enviado correctamente a ${chId}`);
 }catch(e:any){ logError('Anuncio: error comando', e); await inter.reply({content:'Error al enviar anuncio - revisa que el bot tiene permisos y el canal existe', ephemeral:true}).catch(()=>{}); }
}};
