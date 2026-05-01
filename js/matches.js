const FLAGS = {
  "México": "🇲🇽", "Sudáfrica": "🇿🇦", "Corea del Sur": "🇰🇷", "República Checa": "🇨🇿",
  "Canadá": "🇨🇦", "Bosnia y Herzegovina": "🇧🇦", "Qatar": "🇶🇦", "Suiza": "🇨🇭",
  "Brasil": "🇧🇷", "Marruecos": "🇲🇦", "Haití": "🇭🇹", "Escocia": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  "Estados Unidos": "🇺🇸", "Paraguay": "🇵🇾", "Australia": "🇦🇺", "Turquía": "🇹🇷",
  "Alemania": "🇩🇪", "Curazao": "🇨🇼", "Costa de Marfil": "🇨🇮", "Ecuador": "🇪🇨",
  "Países Bajos": "🇳🇱", "Japón": "🇯🇵", "Suecia": "🇸🇪", "Túnez": "🇹🇳",
  "Bélgica": "🇧🇪", "Egipto": "🇪🇬", "Irán": "🇮🇷", "Nueva Zelanda": "🇳🇿",
  "España": "🇪🇸", "Cabo Verde": "🇨🇻", "Arabia Saudita": "🇸🇦", "Uruguay": "🇺🇾",
  "Francia": "🇫🇷", "Senegal": "🇸🇳", "Irak": "🇮🇶", "Noruega": "🇳🇴",
  "Argentina": "🇦🇷", "Argelia": "🇩🇿", "Austria": "🇦🇹", "Jordania": "🇯🇴",
  "Portugal": "🇵🇹", "RD de Congo": "🇨🇩", "Uzbekistán": "🇺🇿", "Colombia": "🇨🇴",
  "Inglaterra": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Croacia": "🇭🇷", "Ghana": "🇬🇭", "Panamá": "🇵🇦"
};

const MATCHES = [
  // GRUPO A
  { id:"A1", group:"A", home:"México",          away:"Sudáfrica",        date:"2026-06-11", time:"16:00", venue:"Ciudad de México" },
  { id:"A2", group:"A", home:"Corea del Sur",   away:"República Checa",  date:"2026-06-11", time:"23:00", venue:"Guadalajara" },
  { id:"A3", group:"A", home:"República Checa", away:"Sudáfrica",        date:"2026-06-18", time:"13:00", venue:"Atlanta" },
  { id:"A4", group:"A", home:"México",          away:"Corea del Sur",    date:"2026-06-18", time:"22:00", venue:"Guadalajara" },
  { id:"A5", group:"A", home:"Sudáfrica",       away:"Corea del Sur",    date:"2026-06-24", time:"22:00", venue:"Monterrey" },
  { id:"A6", group:"A", home:"República Checa", away:"México",           date:"2026-06-24", time:"22:00", venue:"Ciudad de México" },

  // GRUPO B
  { id:"B1", group:"B", home:"Canadá",               away:"Bosnia y Herzegovina", date:"2026-06-12", time:"16:00", venue:"Toronto" },
  { id:"B2", group:"B", home:"Qatar",                away:"Suiza",                date:"2026-06-13", time:"16:00", venue:"San Francisco" },
  { id:"B3", group:"B", home:"Suiza",                away:"Bosnia y Herzegovina", date:"2026-06-18", time:"16:00", venue:"Los Ángeles" },
  { id:"B4", group:"B", home:"Canadá",               away:"Qatar",                date:"2026-06-18", time:"19:00", venue:"Vancouver" },
  { id:"B5", group:"B", home:"Suiza",                away:"Canadá",               date:"2026-06-24", time:"16:00", venue:"Vancouver" },
  { id:"B6", group:"B", home:"Bosnia y Herzegovina", away:"Qatar",                date:"2026-06-24", time:"16:00", venue:"Seattle" },

  // GRUPO C
  { id:"C1", group:"C", home:"Brasil",  away:"Marruecos", date:"2026-06-13", time:"19:00", venue:"Nueva Jersey" },
  { id:"C2", group:"C", home:"Haití",   away:"Escocia",   date:"2026-06-13", time:"22:00", venue:"Boston" },
  { id:"C3", group:"C", home:"Escocia", away:"Marruecos", date:"2026-06-19", time:"19:00", venue:"Boston" },
  { id:"C4", group:"C", home:"Brasil",  away:"Haití",     date:"2026-06-19", time:"21:30", venue:"Philadelphia" },
  { id:"C5", group:"C", home:"Marruecos", away:"Haití",   date:"2026-06-24", time:"19:00", venue:"Atlanta" },
  { id:"C6", group:"C", home:"Brasil",  away:"Escocia",   date:"2026-06-24", time:"19:00", venue:"Miami" },

  // GRUPO D
  { id:"D1", group:"D", home:"Estados Unidos", away:"Paraguay",   date:"2026-06-12", time:"22:00", venue:"Los Ángeles" },
  { id:"D2", group:"D", home:"Australia",      away:"Turquía",    date:"2026-06-14", time:"01:00", venue:"Vancouver" },
  { id:"D3", group:"D", home:"Estados Unidos", away:"Australia",  date:"2026-06-19", time:"16:00", venue:"Seattle" },
  { id:"D4", group:"D", home:"Turquía",        away:"Paraguay",   date:"2026-06-19", time:"23:00", venue:"San Francisco" },
  { id:"D5", group:"D", home:"Paraguay",       away:"Australia",  date:"2026-06-25", time:"23:00", venue:"San Francisco" },
  { id:"D6", group:"D", home:"Turquía",        away:"Estados Unidos", date:"2026-06-25", time:"23:00", venue:"Los Ángeles" },

  // GRUPO E
  { id:"E1", group:"E", home:"Alemania",       away:"Curazao",         date:"2026-06-14", time:"14:00", venue:"Houston" },
  { id:"E2", group:"E", home:"Costa de Marfil", away:"Ecuador",        date:"2026-06-14", time:"20:00", venue:"Philadelphia" },
  { id:"E3", group:"E", home:"Alemania",       away:"Costa de Marfil", date:"2026-06-20", time:"17:00", venue:"Toronto" },
  { id:"E4", group:"E", home:"Ecuador",        away:"Curazao",         date:"2026-06-20", time:"23:00", venue:"Kansas City" },
  { id:"E5", group:"E", home:"Curazao",        away:"Costa de Marfil", date:"2026-06-25", time:"17:00", venue:"Philadelphia" },
  { id:"E6", group:"E", home:"Ecuador",        away:"Alemania",        date:"2026-06-25", time:"17:00", venue:"Nueva Jersey" },

  // GRUPO F
  { id:"F1", group:"F", home:"Países Bajos", away:"Japón",  date:"2026-06-14", time:"17:00", venue:"Dallas" },
  { id:"F2", group:"F", home:"Suecia",       away:"Túnez",  date:"2026-06-14", time:"23:00", venue:"Monterrey" },
  { id:"F3", group:"F", home:"Países Bajos", away:"Suecia", date:"2026-06-20", time:"14:00", venue:"Houston" },
  { id:"F4", group:"F", home:"Túnez",        away:"Japón",  date:"2026-06-20", time:"23:00", venue:"Monterrey" },
  { id:"F5", group:"F", home:"Japón",        away:"Suecia", date:"2026-06-25", time:"20:00", venue:"Dallas" },
  { id:"F6", group:"F", home:"Túnez",        away:"Países Bajos", date:"2026-06-25", time:"20:00", venue:"Kansas City" },

  // GRUPO G
  { id:"G1", group:"G", home:"Bélgica",      away:"Egipto",        date:"2026-06-15", time:"16:00", venue:"Seattle" },
  { id:"G2", group:"G", home:"Irán",         away:"Nueva Zelanda", date:"2026-06-15", time:"22:00", venue:"Los Ángeles" },
  { id:"G3", group:"G", home:"Bélgica",      away:"Irán",          date:"2026-06-21", time:"16:00", venue:"Los Ángeles" },
  { id:"G4", group:"G", home:"Nueva Zelanda", away:"Egipto",       date:"2026-06-21", time:"22:00", venue:"Vancouver" },
  { id:"G5", group:"G", home:"Egipto",       away:"Irán",          date:"2026-06-26", time:"00:00", venue:"Seattle" },
  { id:"G6", group:"G", home:"Nueva Zelanda", away:"Bélgica",      date:"2026-06-26", time:"00:00", venue:"Vancouver" },

  // GRUPO H
  { id:"H1", group:"H", home:"España",        away:"Cabo Verde",    date:"2026-06-15", time:"13:00", venue:"Atlanta" },
  { id:"H2", group:"H", home:"Arabia Saudita", away:"Uruguay",      date:"2026-06-15", time:"19:00", venue:"Miami" },
  { id:"H3", group:"H", home:"España",        away:"Arabia Saudita",date:"2026-06-21", time:"13:00", venue:"Atlanta" },
  { id:"H4", group:"H", home:"Uruguay",       away:"Cabo Verde",    date:"2026-06-21", time:"19:00", venue:"Miami" },
  { id:"H5", group:"H", home:"Cabo Verde",    away:"Arabia Saudita",date:"2026-06-26", time:"21:00", venue:"Houston" },
  { id:"H6", group:"H", home:"Uruguay",       away:"España",        date:"2026-06-26", time:"21:00", venue:"Guadalajara" },

  // GRUPO I
  { id:"I1", group:"I", home:"Francia",  away:"Senegal", date:"2026-06-16", time:"16:00", venue:"Nueva Jersey" },
  { id:"I2", group:"I", home:"Irak",     away:"Noruega", date:"2026-06-16", time:"19:00", venue:"Boston" },
  { id:"I3", group:"I", home:"Francia",  away:"Irak",    date:"2026-06-22", time:"18:00", venue:"Philadelphia" },
  { id:"I4", group:"I", home:"Noruega",  away:"Senegal", date:"2026-06-22", time:"21:00", venue:"Nueva Jersey" },
  { id:"I5", group:"I", home:"Noruega",  away:"Francia", date:"2026-06-26", time:"16:00", venue:"Boston" },
  { id:"I6", group:"I", home:"Senegal",  away:"Irak",    date:"2026-06-26", time:"16:00", venue:"Toronto" },

  // GRUPO J
  { id:"J1", group:"J", home:"Argentina", away:"Argelia",  date:"2026-06-16", time:"22:00", venue:"Kansas City" },
  { id:"J2", group:"J", home:"Austria",   away:"Jordania", date:"2026-06-16", time:"01:00", venue:"San Francisco" },
  { id:"J3", group:"J", home:"Argentina", away:"Austria",  date:"2026-06-22", time:"14:00", venue:"Dallas" },
  { id:"J4", group:"J", home:"Jordania",  away:"Argelia",  date:"2026-06-22", time:"00:00", venue:"San Francisco" },
  { id:"J5", group:"J", home:"Argelia",   away:"Austria",  date:"2026-06-27", time:"23:00", venue:"Kansas City" },
  { id:"J6", group:"J", home:"Jordania",  away:"Argentina",date:"2026-06-27", time:"23:00", venue:"Dallas" },

  // GRUPO K
  { id:"K1", group:"K", home:"Portugal",   away:"RD de Congo", date:"2026-06-17", time:"14:00", venue:"Houston" },
  { id:"K2", group:"K", home:"Uzbekistán", away:"Colombia",    date:"2026-06-17", time:"23:00", venue:"Ciudad de México" },
  { id:"K3", group:"K", home:"Portugal",   away:"Uzbekistán",  date:"2026-06-23", time:"14:00", venue:"Houston" },
  { id:"K4", group:"K", home:"Colombia",   away:"RD de Congo", date:"2026-06-23", time:"23:00", venue:"Guadalajara" },
  { id:"K5", group:"K", home:"Colombia",   away:"Portugal",    date:"2026-06-27", time:"20:30", venue:"Miami" },
  { id:"K6", group:"K", home:"RD de Congo", away:"Uzbekistán", date:"2026-06-27", time:"20:30", venue:"Atlanta" },

  // GRUPO L
  { id:"L1", group:"L", home:"Inglaterra", away:"Croacia", date:"2026-06-17", time:"17:00", venue:"Dallas" },
  { id:"L2", group:"L", home:"Ghana",      away:"Panamá",  date:"2026-06-17", time:"20:00", venue:"Toronto" },
  { id:"L3", group:"L", home:"Inglaterra", away:"Ghana",   date:"2026-06-23", time:"17:00", venue:"Boston" },
  { id:"L4", group:"L", home:"Panamá",     away:"Croacia", date:"2026-06-23", time:"20:00", venue:"Toronto" },
  { id:"L5", group:"L", home:"Croacia",    away:"Ghana",   date:"2026-06-27", time:"18:00", venue:"Philadelphia" },
  { id:"L6", group:"L", home:"Panamá",     away:"Inglaterra", date:"2026-06-27", time:"18:00", venue:"Nueva Jersey" },
];

function getFlag(team) { return FLAGS[team] || "🏳️"; }

function isMatchLocked(match) {
  const kickoff = new Date(`${match.date}T${match.time}:00-03:00`);
  return Date.now() >= kickoff.getTime();
}

function calcPoints(pred, result) {
  if (pred.home === result.home && pred.away === result.away) return 3;
  if (Math.sign(pred.home - pred.away) === Math.sign(result.home - result.away)) return 1;
  return 0;
}

function formatDate(dateStr, timeStr) {
  const d = new Date(`${dateStr}T${timeStr}:00-03:00`);
  return d.toLocaleDateString("es-AR", { weekday:"short", day:"numeric", month:"short" })
    + " " + timeStr + " hs";
}
