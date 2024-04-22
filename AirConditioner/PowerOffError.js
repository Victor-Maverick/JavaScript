class PowerOffError extends Error{
    constructor(message){
        super(message)
        this.name = 'PowerOffError'
    }
}
module.exports = PowerOffError;
