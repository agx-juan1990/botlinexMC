
import { brandEmbed } from '../../utils/embeds.js';
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { channels } from '../../config/channels.js';
import { logInfo, logError } from '../../utils/logger.js';
export async function setupAusencias(guild:any){
 try{
  logInfo(`Ausencias: configurando ${channels.ausencias}`);
  const ch=guild.channels.cache.get(channels.ausencias) as any;
  if(!ch){ logError(`Ausencias: canal no encontrado ${channels.ausencias}`); return; }
  const emb=brandEmbed().setTitle('Ausencias Staff').setDescription('Boton para anunciar ausencia').setColor(0x5C82FF);
  const row=new ActionRowBuilder<ButtonBuilder>().addComponents(new ButtonBuilder().setCustomId('ausencia_btn').setLabel('Anunciar Ausencia').setStyle(ButtonStyle.Primary));
  await ch.send({embeds:[emb],components:[row]}).catch((e:any)=>logError('Ausencias: fallo enviar',e));
  logInfo('Ausencias: mensaje enviado');
 }catch(e:any){ logError('Ausencias: error', e); }
}
