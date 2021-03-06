export type Class =
    | "Artificer"
    | "Barbarian"
    | "Bard"
    | "Blood Hunter"
    | "Cleric"
    | "Druid"
    | "Fighter"
    | "Monk"
    | "Paladin"
    | "Ranger"
    | "Rune Scribe"
    | "Rogue"
    | "Sorcerer"
    | "Warlock"
    | "Wizard";

export type Race =
    | "Dragonborn"
    | "Dwarf"
    | "Elf"
    | "Half-Elf"
    | "Half-Orc"
    | "Halfling"
    | "Human"
    | "Tiefling";

export type Background =
    | "Acolyte"
    | "Anthropologist"
    | "Archaeologist"
    | "Charlatan"
    | "City Watch"
    | "Clan Crafter"
    | "Cloistered Scholar"
    | "Courtier"
    | "Criminal"
    | "Entertainer"
    | "Faceless"
    | "Faction Agent"
    | "Far Traveler"
    | "Folk Hero"
    | "Gladiator"
    | "Grinner"
    | "Guild Artisan"
    | "Guild Merchant"
    | "Haunted One"
    | "House Agent"
    | "Hermit"
    | "Inheritor"
    | "Investigator"
    | "Knight"
    | "Knight of the Order"
    | "Marine"
    | "Mercenary Veteran"
    | "Noble"
    | "Outlander"
    | "Pirate"
    | "Sage"
    | "Sailor"
    | "Solder"
    | "Spy"
    | "Urban Bounty Hunter"
    | "Urchin"
    | "Uthgardt Tribe Member"
    | "Volstrucker Agent"
    | "Waterdhavian Noble";

export type StatShort = "str" | "dex" | "con" | "int" | "wis" | "cha";

export class GenerateSettings {
    showLevel?: boolean;
    showStats?: boolean;
    showSkills?: boolean;
    showSkillMods?: boolean;
    showAvatar?: boolean;
    hitDiceLocation?: "up" | "down";
    showDeathSaves?: boolean;
    showHP?: boolean;
    showSpellSlots?: boolean;
    showProficiencies?: boolean;
    showWeapons?: boolean;
    showItems?: boolean;
    showFeatures?: boolean;
    showSpells?: boolean;
}
