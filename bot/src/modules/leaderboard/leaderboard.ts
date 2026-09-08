
import { getDb } from '../../utils/firestore.js';
import { logInfo, logError } from '../../utils/logger.js';
export async function getLeaderboard(guildId:string, type:string){
 logInfo(`Leaderboard: top ${type} guild ${guildId}`);
 try{
  const db=getDb();
  let col='levels'; if(type==='invites') col='invites'; if(type==='monedas') col='economy';
  const snap=await db.collection('guilds').doc(guildId).collection(col).orderBy(type==='invites'?'count': type==='monedas'?'coins':'level','desc').limit(10).get().catch((e:any)=>{logError(`Leaderboard: fallo ${type}`,e); return {docs:[] as any};});
  logInfo(`Leaderboard: ${snap.docs.length} resultados`);
  return snap.docs.map((d:any)=>({id:d.id, data:d.data()}));
 }catch(e:any){ logError('Leaderboard: error', e); return []; }
}
