
export default class Learn {
        
    constructor() {
        this.a = 'Привет!';
        this.true = false; 
        this.name = "Иван";  
    }   

    static getName() {
        return new this().name;
    }
    
    setName(name) {
        this.name = name;
    }    
    
    getName() {
        return this.name;
    }
}
