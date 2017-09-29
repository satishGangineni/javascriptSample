
class Cat{

constructor(name, color,age){
    this.name = name;
    this.color=color;
    this.age=age;
}

speak(){

    console.log("Meeooow");
}

}

var cat =  new Cat("Flyffy", "brown", 3);

Object.defineProperty(cat,"fullName",{

get:function(){

    return "fullName is " + this.name;
},
set : function(value){

    this.name = value;

}

});

console.log(cat);
cat.speak();
console.log(cat.fullName);
cat.fullName = "Alia";
console.log(cat.name);

