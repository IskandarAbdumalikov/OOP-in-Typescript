//OOP
console.log("//encapsulation\\");

class Laptop {
  readonly brand: string;
  year: number;
  ssd: number;
  private id: number;
  constructor(brand: string, year: number, ssd: number, id: number) {
    this.brand = brand;
    this.id = id;
    this.ssd = ssd;
    this.year = year;
  }
  getDetails() {
    return `Laptop : ${this.brand}  ${this.id} ${this.year}  ${this.ssd}`;
  }
}

let asus = new Laptop("Asus", 2024, 225, 1);

console.log(asus.getDetails());

class Car {
  brand: string;
  year: number;
  public distance: number;
  private color: string;
  constructor(brand: string, year: number, distance: number, color: string) {
    this.brand = brand;
    this.color = color;
    this.distance = distance;
    this.year = year;
  }
  getDetails() {
    return `Car : ${this.brand}  ${this.color} ${this.year}  ${this.distance}`;
  }
}

let Nexia = new Car("Nexia", 2024, 2500, "black");

console.log(Nexia.getDetails());

class Phone {
  brand: string;
  year: number;
  public price: number;
  private color: string;
  constructor(brand: string, year: number, price: number, color: string) {
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.year = year;
  }
  getDetails() {
    return `Phone : ${this.brand}  ${this.color} ${this.year}  $${this.price}`;
  }
}

let Samsung = new Phone("Samsung", 2024, 200, "black");

console.log(Samsung.getDetails());

class Book {
  name: string;
  author: string;
  public paper: number;
  private price: number;
  constructor(name: string, author: string, paper: number, price: number) {
    this.name = name;
    this.price = price;
    this.paper = paper;
    this.author = author;
  }
  getDetails() {
    return `Book : ${this.name} ${this.price} so'm ${this.author}  ${this.paper}varoq`;
  }
}

let OtkanKunlar = new Book("O`tkan Kunlar", "o`tkir Hoshimov", 250, 2500);

console.log(OtkanKunlar.getDetails());

//abstracting

abstract class Payment {
  price: number;
  constructor(price: number) {
    this.price = price;
  }
  abstract getPayment(): string; 
}

class CreditPayment extends Payment {
  getPayment(): string {
    return `Amount: ${this.price}`;
  }
}

let pay = new CreditPayment(230); 
console.log(pay.getPayment());
