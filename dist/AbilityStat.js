"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityStat = void 0;
var AbilityStat = /** @class */ (function () {
    function AbilityStat() {
    }
    Object.defineProperty(AbilityStat.prototype, "mod", {
        get: function () {
            return Math.floor(this.value / 2) - 5;
        },
        enumerable: false,
        configurable: true
    });
    return AbilityStat;
}());
exports.AbilityStat = AbilityStat;
