// Write a “person” class to hold all the details
class Person{
    constructor(name,colour,height,weight,sex,age){
        this.name = name;
        this.colour = colour;
        this.height = height;
        this.weight = weight;
        this.sex = sex;
        this.age = age;
    }

    personSpecs(){
        console.log(`The Name of the person is ${this.name} 
        who is in ${this.colour} colour, height ${this.height}ft,
        weight ${this.weight}kgs is a ${this.sex} 
        and the age is ${this.age}`);
    }
}

const Naveena = new Person("Naveena","white",6.5,60,"female",25)
console.log(Naveena)

// write a class to calculate the Uber price
class Uber_Price {
    constructor(distance) {
      this.distance = distance;
      
    }
    getPrice() {
      return (this.distance ) *20;
    }
  }
  
  let uber = new Uber_Price(10);
  console.log(uber.getPrice());

