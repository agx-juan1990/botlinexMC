
import 'dotenv/config';
import { Client, GatewayIntentBits, Partials } from 'discord.js';
import { logInfo, logError } from './utils/logger.js';
import { handleReady } from './events/ready.js';

logInfo('Iniciando LinexMC Bot v6 Profesional...');
logInfo('Verificando variables de entorno...');

if(!process.env.DISCORD_TOKEN){ logError('DISCORD_TOKEN no definido en .env - el bot no puede iniciar'); process.exit(1); }
if(!process.env.CLIENT_ID){ logError('CLIENT_ID no definido'); process.exit(1); }
if(!process.env.FIREBASE_PROJECT_ID){ logError('FIREBASE_PROJECT_ID no definido - Firestore no funcionara'); }

const client=new Client({
 intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMembers,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent,GatewayIntentBits.GuildInvites],
 partials:[Partials.Channel,Partials.GuildMember,Partials.Message]
});

client.on('ready', async ()=>{
 logInfo(`Bot conectado como ${client.user?.tag} - ID ${client.user?.id}`);
 logInfo(`Guilds: ${client.guilds.cache.size} - Comandos: /profile, /leaderboard, /anuncio, /ticket-panel`);
 await handleReady(client).catch((e:any)=>logError('Error en handleReady',e));
});

client.on('interactionCreate', async (i:any)=>{
 try{
  if(i.isChatInputCommand()){
   logInfo(`Interaction: comando /${i.commandName} por ${i.user.tag} en ${i.guildId}`);
   const cmd=await import(`./commands/${i.commandName}.js`).catch((e:any)=>{logError(`Comando ${i.commandName} no encontrado`,e); return null;});
   if(cmd) await cmd.default.execute(i).catch((e:any)=>{logError(`Error ejecutando comando ${i.commandName}`,e); i.reply({content:'Error interno - revisa logs/error.log', ephemeral:true}).catch(()=>{});});
   else { logError(`Comando ${i.commandName} no existe en ./commands/`); }
  }
 }catch(e:any){ logError('Interaction: error general', e); }
});

client.on('error', (e:any)=> logError('Client error', e));
client.on('shardError', (e:any)=> logError('Shard error', e));

logInfo('Intentando login en Discord...');
client.login(process.env.DISCORD_TOKEN).then(()=>logInfo('Login exitoso - bot online')).catch((e:any)=>{logError('Login fallo - token invalido o sin internet', e); process.exit(1);});
