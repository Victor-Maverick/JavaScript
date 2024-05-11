const PowerOffError = require("./PowerOffError");

class AirConditioner{
    constructor(){
        Boolean:this.isOn;
        Integer:this.temperature = 16;
    }

    toggle(){
        this.isOn = !this.isOn;
    }

    isPowerOn(){
        return this.isOn;
    }

    increaseTemperature(){
        if(!this.isOn)throw new PowerOffError("Turn on AirConditioner") 
         if (this.temperature < 30)this.temperature++;       
    }
    decreaseTemperature(){
        if(!this.isOn) throw new PowerOffError("Turn on AirConditioner")
        if (this.temperature > 16)this.temperature--;

    }
    getTemperature(){
        return this.temperature;
    }
}
module.exports = AirConditioner;