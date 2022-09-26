import {LightBulb, PowerSource} from "./models";

const battery = new PowerSource();

const bulb1 = new LightBulb(battery);

bulb1.switchOn(6) // throws error in 6th second