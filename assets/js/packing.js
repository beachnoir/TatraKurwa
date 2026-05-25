const defaultItems = [
  "Wandelschoenen ingelopen",
  "Regenjas",
  "Warme fleece/isolatielaag",
  "Sneldrogende T-shirts",
  "Wandelbroek",
  "Wandelkousen",
  "EHBO-kit",
  "Persoonlijke medicatie",
  "Powerbank",
  "Hoofdlamp",
  "Waterfles of soft flask",
  "Snacks/energiebars",
  "Cash in PLN",
  "ID-kaart/paspoort",
  "Reisverzekering + contactgegevens",
  "Offline kaart op gsm",
  "Noodnummer opgeslagen (985, 112)",
];

const characterRoster = [
  {
    name: "Theike Turbo",
    key: "theike",
    role: "Group leader",
    flavor: "Speedruns de briefing alsof het een endgame raid is.",
    avatar: "BOSS",
  },
  {
    name: "Armando",
    key: "jj",
    role: "Biologist",
    flavor: "Kan een mos herkennen op 30 meter met tegenlicht.",
    avatar: "BIO",
  },
  {
    name: "Kuup",
    key: "kuup",
    role: "Navigator",
    flavor: "Leest kaarten alsof hij side quests unlockt.",
    avatar: "MAP",
  },
  {
    name: "Verke",
    key: "verke",
    role: "Musician / court jester",
    flavor: "Morale-buff met melodica en volstrekt foute one-liners.",
    avatar: "BARD",
  },
  {
    name: "Nasty",
    key: "nasty",
    role: "Food quartermaster",
    flavor: "Draagt snacks alsof het potion crafting is.",
    avatar: "CHEF",
  },
];

const people = characterRoster.map((character) => character.name);
const characterByName = Object.fromEntries(characterRoster.map((character) => [character.name, character]));

const storageKey = "tatra-custom-packing-v3";
const selectedPersonKey = "tatra-custom-packing-selected-person";

const listElement = document.getElementById("packingList");
const addForm = document.getElementById("addItemForm");
const input = document.getElementById("newItem");
const resetButton = document.getElementById("resetAll");
const personSwitcher = document.getElementById("personSwitcher");
const activePersonLabel = document.getElementById("activePersonLabel");
const exportButton = document.getElementById("exportLists");
const importFileInput = document.getElementById("importListsFile");
const activeAvatar = document.getElementById("activeAvatar");
const activePersonName = document.getElementById("activePersonName");
const activePersonRole = document.getElementById("activePersonRole");
const activePersonFlavor = document.getElementById("activePersonFlavor");
const rosterGrid = document.getElementById("rosterGrid");

function makeDefaultList() {
  return defaultItems.map((text, idx) => ({
    id: `d-${idx}`,
    text,
    done: false,
  }));
}

function makeInitialState() {
  return {
    people: Object.fromEntries(people.map((name) => [name, makeDefaultList()])),
  };
}

function normalizeState(raw) {
  const safe = makeInitialState();
  if (!raw || !raw.people || typeof raw.people !== "object") {
    return safe;
  }

  if (Array.isArray(raw.people.JJ) && !Array.isArray(raw.people.Armando)) {
    raw.people.Armando = raw.people.JJ;
  }

  people.forEach((name) => {
    const items = raw.people[name];
    if (!Array.isArray(items)) {
      return;
    }

    const normalized = items
      .filter((item) => item && typeof item.text === "string")
      .map((item, idx) => ({
        id: typeof item.id === "string" ? item.id : `i-${Date.now()}-${idx}`,
        text: item.text.trim(),
        done: Boolean(item.done),
      }))
      .filter((item) => item.text.length > 0);

    safe.people[name] = normalized;
  });

  return safe;
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey) || "null");
    return normalizeState(parsed);
  } catch {
    return makeInitialState();
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function loadSelectedPerson() {
  const saved = localStorage.getItem(selectedPersonKey);
  if (saved === "JJ") {
    return "Armando";
  }

  if (saved && people.includes(saved)) {
    return saved;
  }

  return people[0];
}

let state = loadState();
let activePerson = loadSelectedPerson();

function getActiveItems() {
  return state.people[activePerson] || [];
}

function setActiveItems(items) {
  state.people[activePerson] = items;
}

function setActivePerson(name) {
  activePerson = name;
  localStorage.setItem(selectedPersonKey, name);
  applyPersonTheme();
  renderPersonSwitcher();
  renderCharacterShowcase();
  render();
}

function applyPersonTheme() {
  characterRoster.forEach((character) => {
    document.body.classList.remove(`person-${character.key}`);
  });

  const activeCharacter = characterByName[activePerson];
  if (activeCharacter) {
    document.body.classList.add(`person-${activeCharacter.key}`);
  }
}

function renderPersonSwitcher() {
  personSwitcher.innerHTML = "";

  characterRoster.forEach((character) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `person-chip person-${character.key}${character.name === activePerson ? " active" : ""}`;
    button.textContent = character.name;
    button.addEventListener("click", () => setActivePerson(character.name));
    personSwitcher.appendChild(button);
  });

  activePersonLabel.textContent = activePerson;
}

function renderCharacterShowcase() {
  const character = characterByName[activePerson];
  if (!character) {
    return;
  }

  activeAvatar.textContent = character.avatar;
  activeAvatar.className = `avatar-frame persona-${character.key}`;
  activePersonName.textContent = character.name;
  activePersonRole.textContent = character.role;
  activePersonFlavor.textContent = character.flavor;
}

function renderRoster() {
  rosterGrid.innerHTML = "";

  characterRoster.forEach((character) => {
    const card = document.createElement("article");
    card.className = "roster-card";

    const top = document.createElement("div");
    top.className = "roster-top";

    const avatar = document.createElement("div");
    avatar.className = `avatar-mini persona-${character.key}`;
    avatar.textContent = character.avatar;

    const textWrap = document.createElement("div");

    const name = document.createElement("h3");
    name.textContent = character.name;

    const role = document.createElement("p");
    role.textContent = character.role;

    const flavor = document.createElement("p");
    flavor.textContent = character.flavor;

    textWrap.appendChild(name);
    textWrap.appendChild(role);
    top.appendChild(avatar);
    top.appendChild(textWrap);
    card.appendChild(top);
    card.appendChild(flavor);
    rosterGrid.appendChild(card);
  });
}

function removeItem(id) {
  const items = getActiveItems().filter((item) => item.id !== id);
  setActiveItems(items);
  saveState();
  render();
}

function toggleItem(id, done) {
  const items = getActiveItems().map((item) => (item.id === id ? { ...item, done } : item));
  setActiveItems(items);
  saveState();
}

function render() {
  listElement.innerHTML = "";
  const items = getActiveItems();

  if (items.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "Lijst is leeg. Voeg een item toe om te starten.";
    listElement.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "checklist-item checklist-item-wide";

    const label = document.createElement("label");
    label.className = "checklist-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.done;
    checkbox.addEventListener("change", () => toggleItem(item.id, checkbox.checked));

    const text = document.createElement("span");
    text.textContent = item.text;
    if (item.done) {
      text.style.textDecoration = "line-through";
      text.style.opacity = "0.72";
    }

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "button button-small";
    remove.textContent = "Verwijder";
    remove.addEventListener("click", () => removeItem(item.id));

    label.appendChild(checkbox);
    label.appendChild(text);

    row.appendChild(label);
    row.appendChild(remove);
    listElement.appendChild(row);
  });
}

function exportLists() {
  const payload = {
    app: "Tatra, Kurwa!",
    version: 1,
    exportedAt: new Date().toISOString(),
    data: state,
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const datePart = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `tatra-kurwa-packing-backup-${datePart}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

async function importLists(file) {
  const text = await file.text();
  const parsed = JSON.parse(text);

  const importedState = parsed?.data ? normalizeState(parsed.data) : normalizeState(parsed);
  state = importedState;
  saveState();
  render();
}

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) {
    return;
  }

  const items = getActiveItems();
  items.push({
    id: `c-${Date.now()}`,
    text: value,
    done: false,
  });

  setActiveItems(items);
  input.value = "";
  saveState();
  render();
});

resetButton.addEventListener("click", () => {
  state = makeInitialState();
  saveState();
  render();
});

exportButton.addEventListener("click", exportLists);

importFileInput.addEventListener("change", async (event) => {
  const [file] = event.target.files || [];
  if (!file) {
    return;
  }

  try {
    await importLists(file);
  } catch {
    alert("Import mislukt. Controleer of je een geldig JSON-backupbestand gebruikt.");
  } finally {
    importFileInput.value = "";
  }
});

applyPersonTheme();
renderPersonSwitcher();
renderCharacterShowcase();
renderRoster();
render();
