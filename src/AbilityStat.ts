export class AbilityStat {
    public value: number;
    public get mod() {
        return Math.floor(this.value / 2) - 5;
    }
    public toStringMod() {
        return this.mod > 0 ? "+" + this.mod : "" + this.mod;
    }
}
