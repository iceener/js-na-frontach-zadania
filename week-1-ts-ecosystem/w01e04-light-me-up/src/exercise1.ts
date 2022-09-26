import {LightBulb, PowerSource} from "./models";

const battery = new PowerSource();
const bulb1 = new LightBulb(battery);
const bulb2 = new LightBulb(battery);
const bulb3 = new LightBulb(battery);
const bulb4 = new LightBulb(battery);
const bulb5 = new LightBulb(battery);

bulb1.start();
bulb2.start();
bulb3.start();
bulb4.start();
bulb5.start();

const bulb6 = new LightBulb(battery);
bulb6.start();
