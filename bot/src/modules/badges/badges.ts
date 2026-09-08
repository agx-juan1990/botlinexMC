
import { badgesDef } from '../../config/badges.js';
import { logInfo } from '../../utils/logger.js';
export function getUserBadges(stats:any){
 logInfo(`Badges: calculando para invites:${stats.invites} msgs:${stats.messages} level:${stats.level}`);
 const out=[]; for(const b of badgesDef){ try{ if(b.check(stats)) out.push(b); }catch{} }
 logInfo(`Badges: ${out.length} encontrados`);
 return out;
}
