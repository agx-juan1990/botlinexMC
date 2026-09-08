
import 'dotenv/config';
import { REST, Routes } from 'discord.js';
import { logInfo, logError } from './utils/logger.js';
const commands=[
 {name:'profile', description:'Ver perfil con badges (invites, mensajes, nivel, roles)'},
 {name:'leaderboard', description:'Top LinexMC', options:[{name:'tipo', description:'invites/mensajes/nivel/monedas', type:3, required:true, choices:[{name:'Invites',value:'invites'},{name:'Mensajes',value:'mensajes'},{name:'Nivel',value:'nivel'},{name:'Monedas',value:'monedas'}]}]},
 {name:'anuncio', description:'Enviar anuncio (solo gestor)'},
 {name:'ticket-panel', description:'Crear panel tickets con categorias auto'},
 {name:'rank', description:'Top niveles'},
];
logInfo(`Deploy: registrando ${commands.length} comandos en Discord...`);
const rest=new REST({version:'10'}).setToken(process.env.DISCORD_TOKEN!);
rest.put(Routes.applicationCommands(process.env.CLIENT_ID!),{body:commands}).then(()=>logInfo('Deploy: comandos registrados correctamente - reinicia el bot')).catch((e:any)=>logError('Deploy: fallo al registrar comandos - verifica CLIENT_ID y DISCORD_TOKEN',e));
