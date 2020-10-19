"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
var AbilityStat_1 = require("./AbilityStat");
var Character = /** @class */ (function () {
    function Character() {
        this.saves = {
            successes: 0,
            failures: 0,
        };
        // Ability Stats
        this.stats = {
            strength: new AbilityStat_1.AbilityStat(),
            dexterity: new AbilityStat_1.AbilityStat(),
            constitution: new AbilityStat_1.AbilityStat(),
            intelligence: new AbilityStat_1.AbilityStat(),
            wisdom: new AbilityStat_1.AbilityStat(),
            charisma: new AbilityStat_1.AbilityStat(),
        };
        this.inspiration = false;
        this.proficiency = 2;
        this.passivePerception = 10;
    }
    return Character;
}());
exports.Character = Character;
