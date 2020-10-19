"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character_1 = require("./Character");
var me = new Character_1.Character();
me.name = "Shumizu";
me.class = "Warlock";
me.level = 3;
me.background = "Acolyte";
me.race = "Fire Genasi";
me.stats.strength.value = 9;
me.stats.dexterity.value = 10;
me.stats.constitution.value = 12 + 2;
me.stats.intelligence.value = 13 + 1;
me.stats.wisdom.value = 14;
me.stats.charisma.value = 15;
// If you save with ability add the proficiency to the modifier
// If Dexterity mod is +3 and proficiency mod is +2, your save is +5
me.savingThrows = ["Wisdom", "Charisma"];
// Skills: Choose two from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion
// Insight, Religion
me.skills = [];
// +2 langs
me.otherProficiencies = [
    "Light armor",
    "Simple weapons",
    "None tools",
    "Common language",
    "Primordial language",
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
    "Sungeoneer's Pack?",
    "Leather armor",
    "Simple Weapon",
    "Two daggers"
];
me.armorClass = 10 + me.stats.dexterity.mod;
me.initiative = me.stats.dexterity.mod;
me.speed = 30;
me.hitDice = me.level; // 3d8
me.maxHp = 8 + me.stats.constitution.value;
me.hp = me.maxHp;
me.tempHp = 0;
me.traits = "I quote (or misquote) sacred texts and proverbs in almost every situation.";
me.ideals = "Charity. I always try to help those in need, no matter what the personal cost. (Good)";
me.bonds = "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.";
me.flaws = "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.";
me.proficiency = 2;
me.spells = ["Eldritch Blast", "Infestation"]; // Cantrip
me.spells.push("Hex", "Toll the Dead"); // Spells lvl1
me.spells.push("Crown of Madness"); // Spells lvl2
me.spells.push("Remove Curse"); // Spells lvl3
me.spellSlots = 2;
console.log(me);
console.log(me.stats.strength.mod);
console.log(me.stats.dexterity.mod);
console.log(me.stats.constitution.mod);
console.log(me.stats.charisma.mod);
