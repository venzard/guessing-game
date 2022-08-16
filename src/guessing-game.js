class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.res = Math.round(((this.max - this.min) / 2) + this.min);
        return this.res;
    }

    lower() {
        this.max = this.res;
    }

    greater() {
        this.min = this.res;
    }
}

module.exports = GuessingGame;
