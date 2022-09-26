import LightBulb from "./LightBulb";
import PowerSource from "./PowerSource";

console.log("zadanie 2")
const powerSource = new PowerSource();
const lightBulbTimer = new LightBulb(powerSource);
lightBulbTimer.consumptionDuring(10).then().catch(e=>{
  console.log(e)
})






