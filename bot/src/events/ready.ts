
import { logInfo, logError } from '../utils/logger.js';
import { autoCreateLogs } from '../modules/logs/autoCreate.js';
import { setupAusencias } from '../modules/ausencias/ausencias.js';
export async function handleReady(client:any){
 try{
  logInfo('Ready: iniciando verificaciones iniciales...');
  for(const g of client.guilds.cache.values()){
   logInfo(`Ready: procesando guild ${g.name} (${g.id}) - miembros ${g.memberCount}`);
   await autoCreateLogs(g).catch((e:any)=>logError(`Ready: fallo autoCreateLogs en ${g.id}`,e));
   await setupAusencias(g).catch((e:any)=>logError(`Ready: fallo setupAusencias en ${g.id}`,e));
   logInfo(`Ready: guild ${g.id} verificada correctamente`);
  }
  logInfo('Ready: todas las guilds verificadas - bot listo');
 }catch(e:any){ logError('Ready: error general', e); }
}
