export default class PowerSource {
  private energySupply = 100;

  public consume(energy:number):number {
    console.log(this.energySupply)
    if (this.energySupply - energy >= 0){
      return this.energySupply -= energy
    }else{
      throw 'Not enough energy';
    }
  }

}
