# LinexMC Official Bot v6 - Final Profesional - By Aegox ORG
## 100% Privado - All Rights Reserved - https://www.aegox.org

### Stack Profesional
- Bot: Node 20 + TypeScript + discord.js 14.16 + Firebase Admin (Prod) + Supabase + Canvas + Winston Logger
- Dashboard: Next.js 14 + Supabase Auth (Discord OAuth) + Firestore + Tailwind
- Logs con explicacion en consola, gestor de errores, auto-recovery

### Estructura Profesional
- bot/src/config/ - canales, roles, badges, guilds, ticketCategories
- bot/src/utils/logger.ts - Winston con colores y explicacion de cada paso
- bot/src/utils/firestore.ts - Conexion Firebase con retry y mensajes claros
- bot/src/utils/embeds.ts - Embeds marca LinexMC
- bot/src/modules/tickets/ - Panel + categorias auto REPORTES BUG, REPORTES USER, etc
- bot/src/modules/welcome/ - Bienvenidas 1546298172522107020 + DM + auto-rol
- bot/src/modules/logs/ - autoCreate LINEX LOGS + verify 24h
- bot/src/modules/ausencias/ - 1545930985173024858 con boton
- bot/src/modules/badges/ - Sistema badges por invites, mensajes, nivel, roles
- bot/src/modules/profile/ - /profile con badges
- bot/src/modules/leaderboard/ - /leaderboard invites/mensajes/nivel/monedas

### Canales IDs Reales
- Ver bot/src/config/channels.ts - Todos tus IDs: bienvenidas, ausencias, registroTickets, anuncios, estado, actualizacion, spoiler, influencer, staffPostu, crearSug, sugerencias, staffLog, staffHistory, sotw, levelUp

### Comandos
- /profile [usuario] - Perfil con badges
- /leaderboard tipo: invites/mensajes/nivel/monedas
- /anuncio tipo: anuncios/estado/actualizacion/spoiler - Solo gestor 1546475680164872232
- /ticket-panel - Panel tickets
- /staff promote/demote/strike/warn/mute/historial
- /rank - Top niveles

### Badges
- Invites: 10/50/100, Mensajes: 300/1000/5000, Nivel: 5/20/50, Roles: Helper/Mod/Admin (tener/haber tenido), SOTW/SOTM, Booster

### Deploy
cd bot && cp .env.example .env && npm install && npm run deploy && npm run dev

### Legal
https://www.aegox.org
https://legal.aegox.org/
https://legal.aegox.org/tos
https://legal.aegox.org/dmca
legal@aegox.org
