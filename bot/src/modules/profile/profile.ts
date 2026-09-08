
import { getUserBadges } from '../badges/badges.js';
import { brandEmbed } from '../../utils/embeds.js';
import { logInfo } from '../../utils/logger.js';
export async function buildProfileEmbed(user:any, stats:any){
 logInfo(`Profile: perfil para ${user.tag}`);
 const badges=getUserBadges(stats);
 const emb=brandEmbed().setTitle(`Perfil ${user.tag}`).setThumbnail(user.displayAvatarURL()).setDescription(`Nivel:${stats.level||0} XP:${stats.xp||0} Mensajes:${stats.messages||0} Invites:${stats.invites||0} Monedas:${stats.coins||0}\nBadges (${badges.length}): ${badges.map(b=>`${b.emoji} ${b.name}`).join(', ')||'Ninguna'}`);
 return emb;
}
