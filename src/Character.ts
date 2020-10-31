import { Class, Race } from "./@types";
import { AbilityStat } from "./AbilityStat";

export class Character {
    public readonly id: string;
    public name: string;
    public playerName: string;

    // Basic Info
    public class: Class;
    private _level: number;
    public background: string;
    public race: Race | string;
    public alignment: string;
    public xp: number;

    // Combat Stats
    public armorClass: number;
    public initiative: number;
    public speed: number;
    public hp: number;
    public maxHp: number;
    public hitDice = new (class HitDice {
        public value: number;
        public times = 1;
        toString() {
            if (this.value == undefined) return "Value is undefined on hit dice";
            return (this.times > 1 ? this.times : "") + "d" + this.value;
        }
    })();
    public saves = new (class SaveManager {
        private succ = 0;
        private fail = 0;
        get successes(): number {
            return this.succ;
        }
        set successes(v: number) {
            if (v > 3) this.succ = 3;
            else this.succ = v;
        }
        get failures(): number {
            return this.fail;
        }
        set failures(v: number) {
            if (v > 3) this.fail = 3;
            else this.fail = v;
        }
    })();
    public tempHp: number;

    // Ability Stats
    public stats = new (class {
        strength = new AbilityStat();
        dexterity = new AbilityStat();
        constitution = new AbilityStat();
        intelligence = new AbilityStat();
        wisdom = new AbilityStat();
        charisma = new AbilityStat();
    })();

    // Other Stats
    public inspiration: boolean = false;
    public proficiency: number = 2;
    public savingThrows: Array<string>;
    public skills: Array<string>;
    public passivePerception: number = 10;
    public otherProficiencies: Array<string>;
    public equipment: Array<string>;

    // Features
    public traits: string;
    public ideals: string;
    public bonds: string;
    public flaws: string;

    // Persona Stats
    public age: number;
    public height: number;
    public weight: number;
    public eyes: string;
    public skin: string;
    public hair: string;

    public appearance: string;
    public allies: string;
    public features: string;
    public treasure: string;

    // Spell handling
    public spellAbility: number;
    public spellSaveDC: number;
    public spellBonus: number;
    public spells: Array<string>;
    public spellSlots: number;

    public get level() {
        return this._level;
    }
    public set level(value) {
        if (value >= 0) this._level = value;
    }
}
