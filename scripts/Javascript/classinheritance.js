

class Animal{

    constructor(voice){
        this.voice = voice || "Crack!!!";
    }
    speak(){
        console.log(this.voice);
    }
}


class Lion extends Animal{

    constructor(name, color){
        super("Roarrrrr!!!");
        this.name=name;
        this.color = color;
    }
}


var l1 =  new Lion("rani","Brown");
l1.speak();
console.log(l1);
//console.log(l1.__proto__);
//console.log(l1.__proto__.constructor);
//console.log(l1.__proto__.__proto__);

console.log(Animal.prototype);
console.log(Lion.prototype);
console.log(l1.__proto__);

console.log(Lion.prototype === l1.__proto__);

//console.log(Lion.prototype.__proto__);
//console.log(Lion.prototype.__proto__ === Animal.prototype)
//console.log(Lion.prototype.__proto__ === Animal.prototype)





