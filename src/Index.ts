import { Character } from "./Character";
import { generate } from "./Generate";

const me = new Character();
me.name = "Shumizu";
me.playerName = "rosen1000";

me.class = "Warlock";
me.level = 3;
me.background = "Acolyte";
me.race = "Fire Genasi";
me.alignment = "Chaotic Evil";
me.xp = 0;

me.stats.strength = 9;
me.stats.dexterity = 10;
me.stats.constitution = 12 + 2;
me.stats.intelligence = 13 + 1;
me.stats.wisdom = 14;
me.stats.charisma = 15;

// If you save with ability add the proficiency to the modifier
// If Dexterity mod is +3 and proficiency mod is +2, your save is +5
me.savingThrows = ["Wisdom", "Charisma"];
me.skills = ["Insight", "Religion", "Arcana", "Investigation"];
// +2 langs
me.otherProficiencies = [
    "Light armor",
    "Simple weapons",
    "None tools",
    "Common language",
    "Primordial language",
    "Abyssal language",
    "ORC language"
];

me.equipment = [
    "A holy symbol",
    "Prayer book",
    "5 sticks of incense",
    "Vestments",
    "Common clothes",
    "15gp",
    "Light crossbow",
    "20 bolts",
    "Arcane Focus",
    "Dungeoneer's Pack?",
    "Leather armor",
    "Simple Weapon",
    "Two daggers"
];

me.armorClass = 10 + me.stats.mod("dex");
me.initiative = me.stats.mod("dex");
me.speed = 30;
me.hitDice.times = 3; // 3d8
me.hitDice.value = 8
me.maxHp = 8 + me.stats.constitution;
me.hp = me.maxHp;
me.tempHp = 0;

me.traits = "I quote (or misquote) sacred texts and proverbs in almost every situation.";
me.ideals = "Charity. I always try to help those in need, no matter what the personal cost. (Good)"
me.bonds = "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.";
me.flaws = "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.";

me.proficiency = 2;
me.spells = ["Eldritch Blast", "Infestation"]; // Cantrip
me.spells.push("Hex", "Toll the Dead"); // Spells lvl1
me.spells.push("Crown of Madness"); // Spells lvl2
me.spells.push("Remove Curse") // Spells lvl3
me.spellSlots = 2;

generate(me);

// console.log(me);
