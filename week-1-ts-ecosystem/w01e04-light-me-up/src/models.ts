class PowerSource {
    private energySupply = 100;

    consume(energy: number): void {
        if (this.energySupply <= 0) {
            throw Error('Source is out of power!');
        }

        this.energySupply -= energy;
    }
}

class LightBulb {
    protected readonly powerConsumption = 20;
    protected readonly powerSource: PowerSource;

    constructor(powerSource: PowerSource) {
        this.powerSource = powerSource;
    }

    start(): void {
        try {
            this.powerSource.consume(this.powerConsumption);
            console.log('Shining');
        } catch (error: any) {
            console.log(`Not shining. Cause: ${error.message}`);
        }
    }

    switchOn(numberOfSeconds: number): void {
        let second = 1;
        let intervalID: NodeJS.Timer;

        intervalID = setInterval(
            () => {
                console.log(`Second: ${second}`);

                try {
                    this.start();

                    if (second >= numberOfSeconds) {
                        return clearInterval(intervalID);
                    }

                    second++;
                } catch (error) {
                    clearInterval(intervalID);
                }
            },
             1000,
        );
    }
}

export { PowerSource, LightBulb };