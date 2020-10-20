import { Class, Race } from "./@types";
import { AbilityStat } from "./AbilityStat";

export class Character {
    public readonly id: string;
    public name: string;

    public class: Class;
    private _level: number;
    public background: string;
    public race: Race | string;

    // Combat Stats
    public armorClass: number;
    public initiative: number;
    public speed: number;
    public hp: number;
    public maxHp: number;
    public hitDice: number;
    public saves = {
        successes: 0,
        failures: 0,
    };
    public tempHp: number;

    // Ability Stats
    public stats = {
        strength: new AbilityStat(),
        dexterity: new AbilityStat(),
        constitution: new AbilityStat(),
        intelligence: new AbilityStat(),
        wisdom: new AbilityStat(),
        charisma: new AbilityStat(),
    };

    public inspiration: boolean = false;
    public proficiency: number = 2;
    public savingThrows: Array<string>;
    public skills: Array<string>;
    public passivePerception: number = 10;
    public otherProficiencies: Array<string>;
    public equipment: Array<string>;
    public spells: Array<string>;
    public spellSlots: number;

    // Features
    public traits: string;
    public ideals: string;
    public bonds: string;
    public flaws: string;

    public get level() {
        return this._level;
    }
    public set level(value) {
        if (value >= 0) this._level = value;
    }
}
