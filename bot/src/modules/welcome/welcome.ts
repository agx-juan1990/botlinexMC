
import { brandEmbed } from '../../utils/embeds.js';
import { channels } from '../../config/channels.js';
import { logInfo, logError } from '../../utils/logger.js';
export async function handleWelcome(member:any){
 try{
  logInfo(`Welcome: nuevo miembro ${member.user.tag}`);
  const ch=member.guild.channels.cache.get(channels.welcome) as any;
  if(ch){ const emb=brandEmbed().setTitle(`Bienvenido ${member.user.username}`).setDescription(`Hola <@${member.id}> IP: play.linexmc.net Web: https://www.aegox.org`); await ch.send({content:`<@${member.id}>`, embeds:[emb]}).catch((e:any)=>logError('Welcome: fallo canal',e)); }
 }catch(e:any){ logError('Welcome: error', e); }
}
