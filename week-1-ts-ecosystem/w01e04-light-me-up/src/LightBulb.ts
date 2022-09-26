import PowerSource from "./PowerSource";

export default class LightBulb {
  private readonly powerConsumption = 20;
  private readonly powerSource:PowerSource

  constructor(powerSource:PowerSource) {
    this.powerSource = powerSource
  }

  public consumption():number {
    return this.powerSource.consume(this.powerConsumption)
  }

  private async delay():Promise<number> {
    return new Promise((resolve,reject) => {
      try{
        setTimeout(() => {
          resolve(this.consumption())
        }, 1000);
      }catch (e){
        reject(e)
      }
    });
  }

  public async consumptionDuring(seconds: number):Promise<void> {
    for (let second = 0; second < seconds; second++) {
      await this.delay()
    }
  }

}
