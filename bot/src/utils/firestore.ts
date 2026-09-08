
import admin from 'firebase-admin';
import { logInfo, logError } from './logger.js';
let db:any=null;
export function getDb(){
  if(db) {
    logInfo('Firestore: usando conexion existente');
    return db;
  }
  try {
    logInfo('Firestore: inicializando conexion con Firebase Prod...');
    if(!admin.apps.length){
      if(!process.env.FIREBASE_PROJECT_ID) throw new Error('FIREBASE_PROJECT_ID no definido - revisa .env');
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g,'\n')
        } as any)
      });
    }
    db=admin.firestore();
    logInfo('Firestore: conectado correctamente a '+process.env.FIREBASE_PROJECT_ID);
    return db;
  } catch(e:any){
    logError('Firestore: fallo al conectar', e);
    throw e;
  }
}
