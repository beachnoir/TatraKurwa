const characterRoster = [
  {
    name: "Theike Turbo",
    key: "theike",
    role: "Group leader",
    flavor: "Houdt de party in formatie, ook wanneer iedereen low battery is.",
    meme: "Main character energy, maar met spreadsheet discipline.",
    avatarLabel: "CAPTAIN",
    gear: "Route board, noodfluitje, groepsgeld",
  },
  {
    name: "Armando",
    key: "jj",
    role: "Biologist",
    flavor: "Detecteert zeldzame flora sneller dan de rest zijn regenjas vindt.",
    meme: "Touch grass, maar dan professioneel.",
    avatarLabel: "SAGE",
    gear: "Loep, notitieboek, soortenspot-list",
  },
  {
    name: "Kuup",
    key: "kuup",
    role: "Navigator",
    flavor: "Heeft altijd een route voordat iemand 'waar zijn we?' kan zeggen.",
    meme: "404: verdwalen not found.",
    avatarLabel: "RANGER",
    gear: "Kaart, kompas, Plan B-exit routes",
  },
  {
    name: "Verke",
    key: "verke",
    role: "Musician / court jester",
    flavor: "Levert morale buffs, side quests en random cutscenes.",
    meme: "Task failed successfully.",
    avatarLabel: "BARD",
    gear: "Bard kit, morale playlist, emergency punchlines",
  },
  {
    name: "Nasty",
    key: "nasty",
    role: "Food quartermaster",
    flavor: "Beheert de snack-economie alsof het een speedrun is.",
    meme: "No food, no movement.",
    avatarLabel: "ALCHEMIST",
    gear: "Snack stash, isotonic reserve, noodle protocol",
  },
];

const planningRows = [
  {
    date: "2026-06-06",
    type: "travel",
    activity: "Vlucht FR4934 (CRL -> KRK)",
    start: "07:25",
    end: "09:25",
    duration: "2u00",
    distance: "-",
    ascent: "-",
    sleep: "-",
    status: "Vastgelegd",
  },
  {
    date: "2026-06-06",
    type: "travel",
    activity: "Transfer KRK Airport -> Zakopane (FlixBus)",
    start: "10:35 of 13:45",
    end: "13:05 of 16:50",
    duration: "2u30-3u05",
    distance: "ca. 130 km",
    ascent: "-",
    sleep: "Willa Labelle",
    status: "Nog boeken",
  },
  {
    date: "2026-06-07",
    type: "hike",
    activity: "Dag 1: Kiry -> Hala Ornak",
    start: "-",
    end: "-",
    duration: "1u34",
    distance: "5.6 km",
    ascent: "+267 m",
    sleep: "Hala Ornak",
    status: "Vastgelegd",
  },
  {
    date: "2026-06-08",
    type: "hike",
    activity: "Dag 2: Hala Ornak -> Hala Kondratowa",
    start: "-",
    end: "-",
    duration: "ca. 7u30-8u30",
    distance: "ca. 14-16 km",
    ascent: "+1300 m",
    sleep: "Hala Kondratowa",
    status: "Vastgelegd",
  },
  {
    date: "2026-06-09",
    type: "hike",
    activity: "Dag 3: Hala Kondratowa -> Murowaniec",
    start: "-",
    end: "-",
    duration: "5u",
    distance: "8.6 km",
    ascent: "+877 m",
    sleep: "Murowaniec",
    status: "Vastgelegd",
  },
  {
    date: "2026-06-10",
    type: "hike",
    activity: "Dag 4: Murowaniec -> Zawrat -> Five Lakes -> afdaling naar Zakopane",
    start: "-",
    end: "-",
    duration: "ca. 8u-10u",
    distance: "ca. 17 km",
    ascent: "+781 m",
    sleep: "Willa Labelle",
    status: "Nog bevestigen",
  },
  {
    date: "2026-06-10",
    type: "hike",
    activity: "Dag 4 Plan B: Murowaniec -> Kuznice (snellere afdaling naar Zakopane)",
    start: "-",
    end: "-",
    duration: "ca. 2u30-3u30",
    distance: "ca. 6.5 km",
    ascent: "voornamelijk afdaling",
    sleep: "Willa Labelle",
    status: "Optioneel",
  },
  {
    date: "2026-06-11",
    type: "travel",
    activity: "FlixBus Zakopane -> KRK Airport",
    start: "TBD",
    end: "TBD",
    duration: "ca. 2u30-3u00",
    distance: "ca. 130 km",
    ascent: "-",
    sleep: "-",
    status: "Nog boeken",
  },
  {
    date: "2026-06-11",
    type: "travel",
    activity: "Vlucht FR5533 (KRK -> CRL)",
    start: "15:45",
    end: "17:45",
    duration: "2u00",
    distance: "-",
    ascent: "-",
    sleep: "-",
    status: "Vastgelegd",
  },
  {
    date: "2026-06-07",
    type: "sleep",
    activity: "Overnachting Hala Ornak",
    start: "Check-in",
    end: "-",
    duration: "nacht",
    distance: "-",
    ascent: "-",
    sleep: "Hala Ornak",
    status: "Vastgelegd",
  },
  {
    date: "2026-06-08",
    type: "sleep",
    activity: "Overnachting Hala Kondratowa",
    start: "Check-in",
    end: "-",
    duration: "nacht",
    distance: "-",
    ascent: "-",
    sleep: "Hala Kondratowa",
    status: "Vastgelegd",
  },
  {
    date: "2026-06-09",
    type: "sleep",
    activity: "Overnachting Murowaniec",
    start: "Check-in",
    end: "-",
    duration: "nacht",
    distance: "-",
    ascent: "-",
    sleep: "Murowaniec",
    status: "Vastgelegd",
  },
  {
    date: "2026-06-10",
    type: "sleep",
    activity: "Overnachting Willa Labelle (geboekt 10-11 juni)",
    start: "Check-in",
    end: "-",
    duration: "nacht",
    distance: "-",
    ascent: "-",
    sleep: "Willa Labelle",
    status: "Vastgelegd",
  },
];

const lodgingLinks = {
  "Hala Ornak": "https://schronisko-ornak.pl/",
  "Hala Kondratowa": "https://schroniskokondratowa.pl/",
  Murowaniec: "https://murowaniec.com/",
  "Dolina Pieciu Stawow": "https://piecstawow.pl/",
  "Five Lakes Hut": "https://piecstawow.pl/",
  "Willa Labelle": "https://www.willalabelle.pl/",
};

const hikeDays = [
  {
    id: "day1",
    title: "Dag 1 - Kiry -> Hala Ornak",
    date: "2026-06-07",
    distance: "5.6 km",
    ascent: "+267 m",
    duration: "1u34",
    verdict: "Goed haalbaar",
    explanation:
      "Zakopane -> minibus naar Kiry, daarna de groene vallei-route naar Hala Ornak. Korte inloopdag met beperkte stijging.",
    trailSequence: "Minibus Zakopane -> Kiry, daarna GREEN trail naar Hala Ornak",
    sources: [
      { label: "Schronisko Ornak", url: "https://schronisko-ornak.pl/" },
      { label: "Routeplanner context", url: "https://mapa-turystyczna.pl/tatry" },
    ],
    gpxFile: "downloads/Tatra_Day1_Kiry-Ornak.gpx",
    turnaroundRule: "Doel: uiterlijk 18:00 in de hut, zodat materiaalcheck voor Dag 2 niet onder druk komt.",
    criticalSections: [
      "Geen technische passages, maar startdagdiscipline: tempo laag en energie sparen voor Dag 2.",
    ],
    coordinates: [
      [49.275474, 19.868932],
      [49.228942, 19.85881],
    ],
  },
  {
    id: "day2",
    title: "Dag 2 - Ornak -> Kondratowa (Czerwone Wierchy)",
    date: "2026-06-08",
    distance: "ca. 14-16 km",
    ascent: "+1300 m",
    duration: "ca. 7u30-8u30",
    verdict: "Zware maar realistische dag",
    explanation:
      "Exact volgens jouw beschrijving: GREEN vanuit Ornak via Dolina Tomanowa naar Chuda Przelaczka en Ciemniak, dan kamwandeling over Krzesanica -> Malolaczniak -> Kopa Kondracka, daarna YELLOW naar Kondracka Przelecz en BLUE naar Hala Kondratowa.",
    trailSequence:
      "GREEN (Ornak -> Chuda Przelaczka -> Ciemniak) -> ridge (Krzesanica -> Malolaczniak -> Kopa Kondracka) -> YELLOW (naar Kondracka Przelecz) -> BLUE (naar Hala Kondratowa)",
    sources: [
      { label: "Schronisko Kondratowa", url: "https://schroniskokondratowa.pl/" },
      { label: "Mapa Turystyczna - Tatry", url: "https://mapa-turystyczna.pl/tatry" },
    ],
    gpxFile: "downloads/Tatra_Day2_Ornak-Kondratowa.gpx",
    turnaroundRule:
      "Cutoff: als je na 14:00 nog niet voorbij de hoofdkam bent, afdalen naar een veiligere vallei-optie in plaats van de volledige kamdoorsteek.",
    criticalSections: [
      "Lange kamdag met veel blootstelling aan wind en weer; energie- en waterbeheer zijn cruciaal.",
      "Bij mist op Czerwone Wierchy strikt op markeringen blijven; richtingfouten kosten veel tijd.",
      "Optioneel: Giewont vanaf Kondracka Przelecz voegt ongeveer 1.5 uur toe (en mogelijk meer bij drukte).",
    ],
    coordinates: [
      [49.228942, 19.85881],
      [49.2288, 19.8742],
      [49.2292, 19.8923],
      [49.231124, 19.903224],
      [49.231544, 19.909528],
      [49.235954, 19.919139],
      [49.2424, 19.9335],
      [49.2406, 19.9379],
      [49.2458, 19.9443],
      [49.2482, 19.9485],
      [49.249647, 19.951727],
    ],
  },
  {
    id: "day3",
    title: "Dag 3 - Kondratowa -> Murowaniec",
    date: "2026-06-09",
    distance: "8.6 km",
    ascent: "+877 m",
    duration: "5u",
    verdict: "Haalbaar met marge",
    explanation:
      "Exact volgens jouw beschrijving: eerst GREEN naar Przelecz pod Kopa Kondracka, daarna RED over de kam naar Kasprowy Wierch, vervolgens YELLOW afdaling naar Murowaniec.",
    trailSequence:
      "GREEN (Kondratowa -> Przelecz pod Kopa Kondracka) -> RED (naar Kasprowy Wierch) -> YELLOW (naar Murowaniec)",
    sources: [
      { label: "Murowaniec", url: "https://murowaniec.com/" },
      { label: "Mapa Turystyczna - Tatry", url: "https://mapa-turystyczna.pl/tatry" },
    ],
    gpxFile: "downloads/Tatra_Day3_Kondratowa-Murowaniec.gpx",
    turnaroundRule:
      "Cutoff: als Kasprowy na 15:00 nog niet gehaald is, omkeren naar Kondratowa-route i.p.v. forceren in dalend licht.",
    criticalSections: [
      "Rugtraject richting Kasprowy blijft weergevoelig; plan extra marge bij wind of regen.",
      "Afdaling naar Murowaniec vraagt kniecontrole na de voorgaande zware dag.",
    ],
    coordinates: [
      [49.249647, 19.951727],
      [49.2451, 19.9462],
      [49.2403, 19.9423],
      [49.234471, 19.9388],
      [49.2348, 19.9478],
      [49.2337, 19.9589],
      [49.2328, 19.9695],
      [49.231801, 19.981561],
      [49.2361, 19.9887],
      [49.2402, 19.9958],
      [49.243273, 20.006932],
    ],
  },
  {
    id: "day4",
    title: "Dag 4 - Murowaniec -> Zawrat -> exit richting Zakopane",
    date: "2026-06-10",
    distance: "ca. 17 km",
    ascent: "+781 m",
    duration: "ca. 8u-10u",
    verdict: "Moeilijkste dag",
    explanation:
      "Hier blijft bewust een keuzedag zoals in jouw tekst: ofwel de zware variant via Zawrat en afdaling richting Palenica, ofwel de snelle exit naar Kuznice en terug naar Zakopane.",
    trailSequence:
      "Optie A: Murowaniec -> Zawrat -> Dolina Pieciu Stawow -> Palenica | Optie B: Murowaniec -> Kuznice",
    sources: [
      { label: "TPN Komunikat Turystyczny", url: "https://tpn.gov.pl/komunikat-turystyczny" },
      { label: "Dolina Pieciu Stawow", url: "https://piecstawow.pl/" },
      { label: "Mapa Turystyczna - Zawrat area", url: "https://mapa-turystyczna.pl/#49.21726/20.06715/15" },
    ],
    gpxFile: "downloads/Tatra_Day4_Murowaniec-Zawrat-Zakopane-Exit.gpx",
    turnaroundRule:
      "Harde cutoff: als je na 12:00 nog niet op/voor Zawrat zit, direct Plan B nemen (Murowaniec -> Kuznice).",
    criticalSections: [
      "Zawrat bevat kettingterrein en file-risico; natte rots maakt dit traag en foutgevoelig.",
      "Afdaling via Piec Stawow -> Wodogrzmoty -> Palenica is lang; vertrek vroeg en hou daglichtreserve.",
    ],
    coordinates: [
      [49.243273, 20.006932],
      [49.232708, 20.014626],
      [49.219088, 20.016392],
      [49.213583, 20.04849],
      [49.2218, 20.0582],
      [49.2294, 20.0738],
      [49.233972, 20.08779],
      [49.2563575, 20.1034202],
    ],
    alternateRoute: {
      label: "Plan B: Murowaniec -> Kuznice",
      gpxFile: "downloads/Tatra_Day4B_Murowaniec-Kuznice.gpx",
      coordinates: [
        [49.243273, 20.006932],
        [49.2465, 19.9962],
        [49.2516, 19.9897],
        [49.2598, 19.9854],
        [49.270251, 19.9808508],
      ],
    },
  },
];

const checklistItems = [
  "ID-kaart/paspoort",
  "Vliegtickets + boekingsbevestigingen",
  "Ryanair Plus: 20 kg ruimbagage per persoon bevestigd",
  "TPN tickets (of plan om ter plaatse te kopen)",
  "Cash (PLN) voor hutten",
  "Regenjas + warme laag",
  "EHBO-kit",
  "Powerbank",
  "Offline kaart op gsm",
  "Noodnummers opgeslagen (985, 112)",
  "Zonnecrème + pet",
];

const offlineChecklistItems = [
  "Organic Maps of OsmAnd op iPhone geinstalleerd",
  "Tatra GPX dagbestanden geimporteerd in de app",
  "Offline kaartregio Zakopane + Tatra vooraf gedownload",
  "Telefoon in vliegtuigmodus getest: route en kaart blijven zichtbaar",
  "Powerbank + kabel bovenaan in dagrugzak",
  "Noodnummers in telefoonfavorieten (112, TOPR 985 / +48 601 100 300)",
];

const planningBody = document.getElementById("planningBody");
const filter = document.getElementById("dayFilter");
const checklist = document.getElementById("checklist");
const resetButton = document.getElementById("resetChecklist");
const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));
const rosterElement = document.getElementById("mainRoster");
const hikeDayButtons = document.getElementById("hikeDayButtons");
const hikeDayInfo = document.getElementById("hikeDayInfo");
const storageKey = "tatra-checklist-v1";
const offlineChecklistElement = document.getElementById("offlineChecklist");
const resetOfflineChecklistButton = document.getElementById("resetOfflineChecklist");
const offlineChecklistStorageKey = "tatra-offline-checklist-v1";

let map;
let activeHikeLayer;
let activeAltHikeLayer;
let activeStartMarker;
let activeEndMarker;
const gpxTrackCache = new Map();

async function getTrackFromGpx(filePath) {
  if (!filePath) {
    return null;
  }

  if (gpxTrackCache.has(filePath)) {
    return gpxTrackCache.get(filePath);
  }

  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Kan GPX niet laden: ${filePath}`);
    }

    const xml = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, "application/xml");
    const points = Array.from(doc.querySelectorAll("trkpt")).map((node) => [
      Number(node.getAttribute("lat")),
      Number(node.getAttribute("lon")),
    ]);

    if (!points.length) {
      return null;
    }

    gpxTrackCache.set(filePath, points);
    return points;
  } catch (error) {
    console.warn(error);
    return null;
  }
}

function typeLabel(type) {
  if (type === "hike") return "Hike";
  if (type === "travel") return "Reis";
  if (type === "sleep") return "Overnachting";
  return type;
}

function statusClass(status) {
  if (status === "Vastgelegd") return "ok";
  if (status === "Nog boeken" || status === "Nog bevestigen") return "todo";
  if (status === "Optioneel") return "optional";
  return "neutral";
}

function formatDate(isoDate) {
  return new Intl.DateTimeFormat("nl-BE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(`${isoDate}T00:00:00`));
}

function formatDayDate(isoDate) {
  return new Intl.DateTimeFormat("nl-BE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
  }).format(new Date(`${isoDate}T00:00:00`));
}

function renderLodgingCell(name) {
  if (!name || name === "-") {
    return "-";
  }

  const link = lodgingLinks[name];
  if (!link) {
    return name;
  }

  return `<a href="${link}" target="_blank" rel="noreferrer">${name}</a>`;
}

function avatarSprite(character) {
  const spriteByKey = {
    theike: {
      tunic: "#d53a3a",
      cape: "#8c1b1b",
      hair: "#3a2a1f",
      item: `<path d="M48 38 l10 -10 l2 2 l-9 10 l-4 1z" fill="#e9eef5" stroke="#a7b1bd" stroke-width="1"/><rect x="44" y="40" width="6" height="3" rx="1" fill="#c79e4e"/><path d="M18 42 h8 v10 h-8z" fill="#d9e4f1" stroke="#9ea8b4" stroke-width="1"/>`,
    },
    jj: {
      tunic: "#2f9b55",
      cape: "#1c6b3a",
      hair: "#2c3325",
      item: `<ellipse cx="53" cy="34" rx="7" ry="5" fill="#77cf84" stroke="#2b7f46" stroke-width="1"/><path d="M49 31 c3 -5 8 -2 8 2 c-2 0 -4 1 -6 3" fill="none" stroke="#2f9b55" stroke-width="1.3"/><circle cx="20" cy="46" r="4" fill="#d9f0df" stroke="#8fb89d" stroke-width="1"/>`,
    },
    kuup: {
      tunic: "#c99a14",
      cape: "#886605",
      hair: "#4f3a16",
      item: `<rect x="47" y="29" width="14" height="10" rx="1.5" fill="#efe6c9" stroke="#a98f5a" stroke-width="1"/><path d="M52 29 v10 M56 29 v10" stroke="#9f8f62" stroke-width="1"/><circle cx="20" cy="44" r="5" fill="#f2d37a" stroke="#a6841b" stroke-width="1"/><path d="M20 39 v10 M15 44 h10" stroke="#6d550b" stroke-width="1"/>`,
    },
    verke: {
      tunic: "#2f66d5",
      cape: "#1c3d8d",
      hair: "#2d2630",
      item: `<ellipse cx="53" cy="34" rx="6" ry="8" fill="#cf8b4a" stroke="#8f5a2c" stroke-width="1"/><line x1="51" y1="28" x2="56" y2="40" stroke="#8f5a2c" stroke-width="1"/><circle cx="18" cy="44" r="3" fill="#f5de6f" stroke="#b08b28" stroke-width="1"/><circle cx="23" cy="46" r="2" fill="#f5de6f" stroke="#b08b28" stroke-width="1"/>`,
    },
    nasty: {
      tunic: "#d45199",
      cape: "#93316c",
      hair: "#4a233f",
      item: `<rect x="47" y="31" width="12" height="8" rx="2" fill="#d5d9dd" stroke="#9ca2a8" stroke-width="1"/><rect x="50" y="28" width="6" height="3" rx="1" fill="#b5b9bc"/><circle cx="20" cy="46" r="4" fill="#ffcf89" stroke="#c5934b" stroke-width="1"/>`,
    },
  };

  const sprite = spriteByKey[character.key] || spriteByKey.theike;

  return `
    <svg class="avatar-mini-svg" viewBox="0 0 80 80" role="img" aria-label="${character.name} karakter">
      <ellipse cx="40" cy="71" rx="20" ry="5" fill="rgba(0, 0, 0, 0.24)"/>
      <path d="M22 54 l18 -11 l18 11 v7 h-36z" fill="${sprite.cape}" opacity="0.9"/>
      <rect x="30" y="57" width="8" height="12" rx="2" fill="#3f2e22"/>
      <rect x="42" y="57" width="8" height="12" rx="2" fill="#3f2e22"/>
      <path d="M28 35 h24 v20 h-24z" fill="${sprite.tunic}" stroke="rgba(22,22,22,0.5)" stroke-width="1"/>
      <rect x="28" y="44" width="24" height="4" fill="rgba(18, 18, 18, 0.28)"/>
      <rect x="37" y="43" width="6" height="6" rx="1" fill="#c8b17a"/>
      <rect x="21" y="39" width="7" height="14" rx="3" fill="#f0c8a0"/>
      <rect x="52" y="39" width="7" height="14" rx="3" fill="#f0c8a0"/>
      <circle cx="40" cy="25" r="11" fill="#f0c8a0" stroke="rgba(50,40,30,0.35)" stroke-width="1"/>
      <path d="M31 21 c2 -7 16 -8 19 0 v4 h-19z" fill="${sprite.hair}"/>
      <path d="M30 20 l10 -8 l10 8 v3 h-20z" fill="${sprite.tunic}" opacity="0.95"/>
      <circle cx="36" cy="26" r="1.2" fill="#2f2a27"/>
      <circle cx="44" cy="26" r="1.2" fill="#2f2a27"/>
      <path d="M37 30 q3 2 6 0" stroke="#7e4d3d" stroke-width="1.1" fill="none" stroke-linecap="round"/>
      ${sprite.item}
    </svg>
  `;
}

function renderRoster() {
  if (!rosterElement) {
    return;
  }

  rosterElement.innerHTML = "";

  characterRoster.forEach((character) => {
    const card = document.createElement("article");
    card.className = "roster-card";

    const top = document.createElement("div");
    top.className = "roster-top";

    const avatar = document.createElement("div");
    avatar.className = `avatar-mini persona-${character.key}`;
    avatar.innerHTML = `
      ${avatarSprite(character)}
      <span class="avatar-mini-label">${character.avatarLabel || "HERO"}</span>
    `;

    const textWrap = document.createElement("div");
    textWrap.className = "roster-text";
    const name = document.createElement("h3");
    name.textContent = character.name;
    const role = document.createElement("p");
    role.textContent = character.role;
    const flavor = document.createElement("p");
    flavor.textContent = character.flavor;
    const meme = document.createElement("p");
    meme.className = "meme-line";
    meme.textContent = character.meme;
    const gear = document.createElement("p");
    gear.className = "gear-line";
    gear.textContent = `Loadout: ${character.gear}`;

    textWrap.appendChild(name);
    textWrap.appendChild(role);
    top.appendChild(avatar);
    top.appendChild(textWrap);
    card.appendChild(top);
    card.appendChild(flavor);
    card.appendChild(gear);
    card.appendChild(meme);
    rosterElement.appendChild(card);
  });
}

function activateTab(tabName) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.tabPanel === tabName);
  });

  if (tabName === "hike" && map) {
    setTimeout(() => map.invalidateSize(), 0);
  }
}

function initTabs() {
  if (!tabButtons.length || !tabPanels.length) {
    return;
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => activateTab(button.dataset.tab));
  });
}

function renderHikeDayButtons(activeId) {
  if (!hikeDayButtons) {
    return;
  }

  hikeDayButtons.innerHTML = "";

  hikeDays.forEach((day) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `day-chip${day.id === activeId ? " active" : ""}`;
    button.textContent = day.title;
    button.addEventListener("click", () => renderHikeDay(day.id));
    hikeDayButtons.appendChild(button);
  });
}

function renderHikeInfo(day) {
  if (!hikeDayInfo) {
    return;
  }

  const sourceLinks = day.sources
    .map((source) => `<a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>`)
    .join(" · ");

  const criticalSectionsHtml = Array.isArray(day.criticalSections) && day.criticalSections.length
    ? `<p><strong>Kritieke stukken:</strong></p><ul class="safety-list">${day.criticalSections
        .map((item) => `<li>${item}</li>`)
        .join("")}</ul>`
    : "";

  hikeDayInfo.innerHTML = `
    <p class="muted-line">${formatDayDate(day.date)}</p>
    <h3>${day.title}</h3>
    <p class="feasibility-badge">${day.verdict}</p>
    <p>${day.explanation}</p>
    <p><strong>Afstand:</strong> ${day.distance}</p>
    <p><strong>Stijging:</strong> ${day.ascent}</p>
    <p><strong>Duur:</strong> ${day.duration}</p>
    ${day.trailSequence ? `<p><strong>Trail-sequentie:</strong> ${day.trailSequence}</p>` : ""}
    ${criticalSectionsHtml}
    ${day.turnaroundRule ? `<p><strong>Turn-around:</strong> ${day.turnaroundRule}</p>` : ""}
    ${
      day.alternateRoute
        ? `<p><strong>Plan B:</strong> ${day.alternateRoute.label} (sneller afdalen bij slecht weer/vermoeidheid).</p>`
        : ""
    }
    <p class="muted-line"><strong>Bronnen:</strong> ${sourceLinks}</p>
    <p class="muted-line">Kaartlijn wordt direct uit het gekoppelde GPX-bestand gelezen zodat pagina en downloads synchroon blijven.</p>
  `;
}

async function renderHikeOnMap(day) {
  if (!map) {
    return;
  }

  if (activeHikeLayer) {
    map.removeLayer(activeHikeLayer);
  }
  if (activeAltHikeLayer) {
    map.removeLayer(activeAltHikeLayer);
  }
  if (activeStartMarker) {
    map.removeLayer(activeStartMarker);
  }
  if (activeEndMarker) {
    map.removeLayer(activeEndMarker);
  }

  const primaryTrack = (await getTrackFromGpx(day.gpxFile)) || day.coordinates;
  activeHikeLayer = L.polyline(primaryTrack, {
    color: "#0f766e",
    weight: 5,
    opacity: 0.85,
  }).addTo(map);

  if (day.alternateRoute && Array.isArray(day.alternateRoute.coordinates)) {
    const alternateTrack =
      (await getTrackFromGpx(day.alternateRoute.gpxFile)) || day.alternateRoute.coordinates;

    activeAltHikeLayer = L.polyline(alternateTrack, {
      color: "#c2410c",
      weight: 4,
      opacity: 0.85,
      dashArray: "8 6",
    }).addTo(map);
    activeAltHikeLayer.bindPopup(day.alternateRoute.label);
  } else {
    activeAltHikeLayer = null;
  }

  const start = day.coordinates[0];
  const end = day.coordinates[day.coordinates.length - 1];

  activeStartMarker = L.marker(start).addTo(map).bindPopup(`${day.title} - Start`);
  activeEndMarker = L.marker(end).addTo(map).bindPopup(`${day.title} - Einde`);

  if (activeAltHikeLayer) {
    const mergedBounds = activeHikeLayer.getBounds().extend(activeAltHikeLayer.getBounds());
    map.fitBounds(mergedBounds, { padding: [22, 22] });
  } else {
    map.fitBounds(activeHikeLayer.getBounds(), { padding: [22, 22] });
  }
}

async function renderHikeDay(dayId) {
  const day = hikeDays.find((item) => item.id === dayId) || hikeDays[0];
  renderHikeDayButtons(day.id);
  renderHikeInfo(day);
  await renderHikeOnMap(day);
}

function initHikeMap() {
  const mapElement = document.getElementById("hikeMap");
  if (!mapElement || typeof L === "undefined") {
    return;
  }

  map = L.map("hikeMap", { zoomControl: true }).setView([49.236, 19.98], 11);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  void renderHikeDay(hikeDays[0].id);
}

function renderPlanning(type = "all") {
  planningBody.innerHTML = "";
  const list = type === "all" ? planningRows : planningRows.filter((row) => row.type === type);

  list
    .map((row, index) => ({ row, index }))
    .sort((a, b) => {
      if (a.row.date === b.row.date) {
        return a.index - b.index;
      }
      return a.row.date > b.row.date ? 1 : -1;
    })
    .forEach(({ row }) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${formatDate(row.date)}</td>
        <td><span class="table-tag ${row.type}">${typeLabel(row.type)}</span></td>
        <td>${row.activity}</td>
        <td>${row.start}</td>
        <td>${row.end}</td>
        <td>${row.duration}</td>
        <td>${row.distance}</td>
        <td>${row.ascent}</td>
        <td>${renderLodgingCell(row.sleep)}</td>
        <td><span class="status-pill ${statusClass(row.status)}">${row.status}</span></td>
      `;
      planningBody.appendChild(tr);
    });
}

function getChecklistState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch {
    return {};
  }
}

function renderChecklist() {
  checklist.innerHTML = "";
  const state = getChecklistState();

  checklistItems.forEach((item, index) => {
    const id = `c-${index}`;
    const wrapper = document.createElement("label");
    wrapper.className = "checklist-item";
    wrapper.setAttribute("for", id);

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.checked = Boolean(state[item]);
    input.addEventListener("change", () => {
      const next = getChecklistState();
      next[item] = input.checked;
      localStorage.setItem(storageKey, JSON.stringify(next));
    });

    const text = document.createElement("span");
    text.textContent = item;

    wrapper.appendChild(input);
    wrapper.appendChild(text);
    checklist.appendChild(wrapper);
  });
}

function getOfflineChecklistState() {
  try {
    return JSON.parse(localStorage.getItem(offlineChecklistStorageKey) || "{}");
  } catch {
    return {};
  }
}

function renderOfflineChecklist() {
  if (!offlineChecklistElement) {
    return;
  }

  offlineChecklistElement.innerHTML = "";
  const state = getOfflineChecklistState();

  offlineChecklistItems.forEach((item, index) => {
    const id = `offline-c-${index}`;
    const wrapper = document.createElement("label");
    wrapper.className = "checklist-item";
    wrapper.setAttribute("for", id);

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.checked = Boolean(state[item]);
    input.addEventListener("change", () => {
      const next = getOfflineChecklistState();
      next[item] = input.checked;
      localStorage.setItem(offlineChecklistStorageKey, JSON.stringify(next));
    });

    const text = document.createElement("span");
    text.textContent = item;

    wrapper.appendChild(input);
    wrapper.appendChild(text);
    offlineChecklistElement.appendChild(wrapper);
  });
}

if (filter) {
  filter.addEventListener("change", () => renderPlanning(filter.value));
}

if (resetButton) {
  resetButton.addEventListener("click", () => {
    localStorage.removeItem(storageKey);
    renderChecklist();
  });
}

if (resetOfflineChecklistButton) {
  resetOfflineChecklistButton.addEventListener("click", () => {
    localStorage.removeItem(offlineChecklistStorageKey);
    renderOfflineChecklist();
  });
}

document.getElementById("lastUpdated").textContent = new Date().toLocaleDateString("nl-BE");

initTabs();
renderRoster();
initHikeMap();
renderPlanning();
renderChecklist();
renderOfflineChecklist();
