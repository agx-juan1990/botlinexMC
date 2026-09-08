
import { ChannelType, PermissionFlagsBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder } from 'discord.js';
import { config } from '../../config/index.js';
import { brandEmbed } from '../../utils/embeds.js';
import { logInfo, logError } from '../../utils/logger.js';
async function getOrCreateCat(guild:any, name:string){
 let cat=guild.channels.cache.find((c:any)=>c.name===name && c.type===ChannelType.GuildCategory);
 if(!cat){ logInfo(`Tickets: creando categoria ${name}`); cat=await guild.channels.create({name, type:ChannelType.GuildCategory}).catch((e:any)=>{logError(`Tickets: fallo crear ${name}`,e); return null;}); }
 return cat;
}
export async function createTicketPanel(inter:any){
 logInfo(`Tickets: panel solicitado en ${inter.channel?.id}`);
 const emb=new EmbedBuilder().setTitle('Centro Ayuda LinexMC').setDescription('Categorias auto: REPORTES BUG, REPORTES USER, etc').setColor(0x5C82FF);
 const menu=new StringSelectMenuBuilder().setCustomId('ticket_select').setPlaceholder('Elige').addOptions([{label:'Soporte',value:'soporte',emoji:'🛠️'},{label:'Bug',value:'bugs',emoji:'🐛'},{label:'Report User',value:'report_user',emoji:'🚨'}]);
 const row=new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(menu);
 await inter.reply({embeds:[emb],components:[row]});
 logInfo('Tickets: panel enviado');
}
