
import { EmbedBuilder } from 'discord.js';
export const brandEmbed = () => new EmbedBuilder().setColor(0x5C82FF).setFooter({text:'LinexMC | Aegox ORG - https://www.aegox.org'}).setTimestamp();
export const errorEmbed = (desc:string) => brandEmbed().setTitle('❌ Error').setDescription(desc).setColor(0xED4245);
export const successEmbed = (desc:string) => brandEmbed().setTitle('✅ Exito').setDescription(desc).setColor(0x57F287);
