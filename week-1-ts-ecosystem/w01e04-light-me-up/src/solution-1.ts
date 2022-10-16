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
}

const powerSource = new PowerSource();

for (let i = 0; i <= 5; i++) {
  new LightBulb(powerSource).on();
}
