let AirConditioner = require('./AirConditioner.js')
const PowerOffError = require("./PowerOffError.js")

describe('AirConditioner', ()=>{
    let airConditioner;

    beforeEach(()=>{
        airConditioner = new AirConditioner();
    })

    test("Turn Ac On", ()=>{
        airConditioner.toggle();
        let resutlt = airConditioner.isPowerOn();
        expect(resutlt).toBe(true)
    })
    
    test("Turn AC Off", ()=> {
        airConditioner.toggle();
        let resutlt = airConditioner.isPowerOn();
        expect(resutlt).toBe(true)
        airConditioner.toggle();
        expect(airConditioner.isPowerOn()).toBe(false)
        
    })

    describe('increaseTemperature', () => {
        test("Increase temperature when AC is off, Throws error", ()=>{    
            expect(() => airConditioner.increaseTemperature()).toThrow('Turn on AirConditioner');
            expect(airConditioner.getTemperature()).toEqual(16)
        })
    

        test('Increase temperature when AC is on, Temperature increases', () => {
            airConditioner.toggle();
            airConditioner.increaseTemperature();
            expect(airConditioner.getTemperature()).toEqual(17);
        });
    });

    describe('decreaseTemperature', () => {
        test("Decrease temperature when AC is off, Throws error", ()=>{ 
            airConditioner.toggle()
            airConditioner.increaseTemperature();
            airConditioner.toggle()   
            expect(() => airConditioner.decreaseTemperature()).toThrow('Turn on AirConditioner');
            expect(airConditioner.getTemperature()).toEqual(17)
        })
    

        test('Decrease temperature when AC is on, Temperature decreases', () => {
            airConditioner.toggle();
            airConditioner.increaseTemperature();
            expect(airConditioner.getTemperature()).toEqual(17);
            airConditioner.decreaseTemperature();
            expect(airConditioner.getTemperature()).toEqual(16);
        });
    });
    
    test("Decrease Temperature below 16, temperature remains 16", ()=>{
        airConditioner.toggle();
        airConditioner.decreaseTemperature()
        expect(airConditioner.getTemperature()).toBe(16)
    })

    test("Increase Temperature above 16, temperature remains 30", ()=>{
        airConditioner.toggle();
        for(let count=1; count<20; count++){
            airConditioner.increaseTemperature();
        }
        expect(airConditioner.getTemperature()).toBe(30)
    })

})


