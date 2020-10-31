import { Class, Race } from "./@types";

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
        private str: number;
        private dex: number;
        private con: number;
        private int: number;
        private wis: number;
        private cha: number;

        public get strength(): number {
            return this.str;
        }

        public get dexterity(): number {
            return this.dex;
        }

        public get constitution(): number {
            return this.con;
        }

        public get intelligence(): number {
            return this.int;
        }

        public get wisdom(): number {
            return this.wis;
        }

        public get charisma(): number {
            return this.cha;
        }

        public set strength(v: number) {
            if (v < 1) this.str = 1;
            else if (v > 30) this.str = 30;
            else this.str = v;
        }

        public set dexterity(v: number) {
            if (v < 1) this.dex = 1;
            else if (v > 30) this.dex = 30;
            else this.dex = v;
        }

        public set constitution(v: number) {
            if (v < 1) this.con = 1;
            else if (v > 30) this.con = 30;
            else this.con = v;
        }

        public set intelligence(v: number) {
            if (v < 1) this.int = 1;
            else if (v > 30) this.int = 30;
            else this.int = v;
        }

        public set wisdom(v: number) {
            if (v < 1) this.wis = 1;
            else if (v > 30) this.wis = 30;
            else this.wis = v;
        }

        public set charisma(v: number) {
            if (v < 1) this.cha = 1;
            else if (v > 30) this.cha = 30;
            else this.cha = v;
        }

        public mod(type: "str" | "dex" | "con" | "int" | "wis" | "cha") {
            return Math.floor(this[type] / 2) - 5;
        }

        public modString(type: "str" | "dex" | "con" | "int" | "wis" | "cha") {
            let mod = this.mod(type);
            return mod > 0 ? "+" + mod : "" + mod;
        }
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
