class PowerSource {
  private energySupply = 100;

  consume(energy: number) {
    if (energy > this.energySupply) {
      throw new Error("Not enough energy");
    }
    this.energySupply -= energy;
  }
}

class LightBulb {
  protected readonly powerConsumption = 20;

  constructor(public source: PowerSource) {}

  on() {
    this.source.consume(this.powerConsumption);
  }

  onForSpecifiedTime(seconds: number) {
    setTimeout(() => {
      try {
        this.on();
        seconds -= 1;
        if (seconds) this.onForSpecifiedTime(seconds);
      } catch (err) {
        throw err;
      }
    }, 1000);
  }
}

const powerSource = new PowerSource();
new LightBulb(powerSource).onForSpecifiedTime(6);
