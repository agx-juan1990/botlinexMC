
export const badgesDef = [
 {id:'invites_10', name:'Invitador Novato', emoji:'📩', desc:'10 invites validos (10d+nv1)', check:(s:any)=>(s.invites||0)>=10},
 {id:'invites_50', name:'Invitador Pro', emoji:'✉️', desc:'50 invites', check:(s:any)=>(s.invites||0)>=50},
 {id:'invites_100', name:'Leyenda Invites', emoji:'📬', desc:'100 invites', check:(s:any)=>(s.invites||0)>=100},
 {id:'msgs_300', name:'Charlatan', emoji:'💬', desc:'300 mensajes', check:(s:any)=>(s.messages||0)>=300},
 {id:'msgs_1000', name:'Conversador', emoji:'🗣️', desc:'1000 mensajes', check:(s:any)=>(s.messages||0)>=1000},
 {id:'msgs_5000', name:'Spammer Legend', emoji:'🔥', desc:'5000 mensajes', check:(s:any)=>(s.messages||0)>=5000},
 {id:'level_5', name:'Nivel 5', emoji:'⭐', desc:'Nivel 5', check:(s:any)=>(s.level||0)>=5},
 {id:'level_20', name:'Nivel 20', emoji:'🌟', desc:'Nivel 20', check:(s:any)=>(s.level||0)>=20},
 {id:'level_50', name:'Nivel 50', emoji:'💫', desc:'Nivel 50', check:(s:any)=>(s.level||0)>=50},
 {id:'role_helper', name:'Ex-Helper', emoji:'🛡️', desc:'Tuvo/tiene Helper', check:(s:any)=>s.roles?.includes('Helper')||s.hadRoles?.includes('Helper')},
 {id:'role_mod', name:'Ex-Mod', emoji:'⚔️', desc:'Tuvo/tiene Mod', check:(s:any)=>s.roles?.includes('Mod')||s.hadRoles?.includes('Mod')},
 {id:'role_admin', name:'Ex-Admin', emoji:'👑', desc:'Tuvo/tiene Admin', check:(s:any)=>s.roles?.includes('Admin')||s.hadRoles?.includes('Admin')},
 {id:'sotw', name:'SOTW', emoji:'🏆', desc:'Staff Of The Week', check:(s:any)=>(s.sotw||0)>=1},
 {id:'sotm', name:'SOTM', emoji:'🏅', desc:'Staff Of The Month', check:(s:any)=>(s.sotm||0)>=1},
 {id:'booster', name:'Booster', emoji:'🚀', desc:'Booster del server', check:(s:any)=>!!s.booster},
];
