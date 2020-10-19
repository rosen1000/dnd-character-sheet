export class AbilityStat {
    public value: number;
    public get mod() {
        return Math.floor(this.value / 2) - 5;
    }
}
