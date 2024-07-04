// //OOP
// console.log("//encapsulation\\");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Laptop {
//   readonly brand: string;
//   year: number;
//   ssd: number;
//   private id: number;
//   constructor(brand: string, year: number, ssd: number, id: number) {
//     this.brand = brand;
//     this.id = id;
//     this.ssd = ssd;
//     this.year = year;
//   }
//   getDetails() {
//     return `Laptop : ${this.brand}  ${this.id} ${this.year}  ${this.ssd}`;
//   }
// }
// let asus = new Laptop("Asus", 2024, 225, 1);
// console.log(asus.getDetails());
// class Car {
//   brand: string;
//   year: number;
//   public distance: number;
//   private color: string;
//   constructor(brand: string, year: number, distance: number, color: string) {
//     this.brand = brand;
//     this.color = color;
//     this.distance = distance;
//     this.year = year;
//   }
//   getDetails() {
//     return `Car : ${this.brand}  ${this.color} ${this.year}  ${this.distance}`;
//   }
// }
// let Nexia = new Car("Nexia", 2024, 2500, "black");
// console.log(Nexia.getDetails());
// class Phone {
//   brand: string;
//   year: number;
//   public price: number;
//   private color: string;
//   constructor(brand: string, year: number, price: number, color: string) {
//     this.brand = brand;
//     this.color = color;
//     this.price = price;
//     this.year = year;
//   }
//   getDetails() {
//     return `Phone : ${this.brand}  ${this.color} ${this.year}  $${this.price}`;
//   }
// }
// let Samsung = new Phone("Samsung", 2024, 200, "black");
// console.log(Samsung.getDetails());
// class Book {
//   name: string;
//   author: string;
//   public paper: number;
//   private price: number;
//   constructor(name: string, author: string, paper: number, price: number) {
//     this.name = name;
//     this.price = price;
//     this.paper = paper;
//     this.author = author;
//   }
//   getDetails() {
//     return `Book : ${this.name} ${this.price} so'm ${this.author}  ${this.paper}varoq`;
//   }
// }
// let OtkanKunlar = new Book("O`tkan Kunlar", "o`tkir Hoshimov", 250, 2500);
// console.log(OtkanKunlar.getDetails());
// console.log('//abstracting\\');
// abstract class Payment {
//   price: number;
//   constructor(price: number) {
//     this.price = price;
//   }
//   abstract getPayment(): string;
// }
// class CreditPayment extends Payment {
//   getPayment(): string {
//     return `Amount: ${this.price}`;
//   }
// }
// let pay = new CreditPayment(230);
// console.log(pay.getPayment());
// abstract class Person {
//   age: number;
//   constructor(age: number) {
//     this.age = age;
//   }
//   abstract getPerson(): string;
// }
// class Iskandar extends Person {
//   getPerson(): string {
//     return `Age : ${this.age}`;
//   }
// }
// let iskandar = new Iskandar(17);
// console.log(iskandar.getPerson());
// abstract class Home {
//   kv: number;
//   constructor(kv: number) {
//     this.kv = kv;
//   }
//   abstract getHome(): string;
// }
// class HonSaroy extends Home {
//   getHome(): string {
//     return `kv : ${this.kv}`;
//   }
// }
// let honSaroy:HonSaroy = new HonSaroy(3450);
// console.log(honSaroy.getHome());
// abstract class Apple {
//   price: number;
//   constructor(price: number) {
//     this.price = price;
//   }
//   abstract getApple(): string;
// }
// class Iphone extends Apple {
//   getApple(): string {
//     return `price : ${this.price} $`;
//   }
// }
// let iphone: Iphone = new Iphone(1340);
// console.log(iphone.getApple());
// console.log("//polymorphism\\");
// abstract class Payment {
//   price: number;
//   constructor(price: number) {
//     this.price = price;
//   }
//   abstract getPayment(): string;
// }
// class CreditPayment extends Payment {
//   getPayment(): string {
//     return `Credit Payment - Amount: ${this.price}`;
//   }
// }
// class PayPalPayment extends Payment {
//   getPayment(): string {
//     return `PayPal Payment - Amount: ${this.price}`;
//   }
// }
// class CashPayment extends Payment {
//   getPayment(): string {
//     return `Cash Payment - Amount: ${this.price}`;
//   }
// }
// function processPayment(payment: Payment) {
//   console.log(payment.getPayment());
// }
// let creditPay = new CreditPayment(230);
// let paypalPay = new PayPalPayment(150);
// let cashPay = new CashPayment(100);
// processPayment(creditPay);
// processPayment(paypalPay);
// processPayment(cashPay);
console.log("//inheritance\\");
var Animal = /** @class */ (function () {
    function Animal(name, isPredator) {
        this.isPredator = isPredator;
        this.name = name;
    }
    return Animal;
}());
var WildAnimal = /** @class */ (function (_super) {
    __extends(WildAnimal, _super);
    function WildAnimal(name, isPredator, age) {
        var _this = _super.call(this, name, isPredator) || this;
        _this.age = age;
        return _this;
    }
    return WildAnimal;
}(Animal));
var lion = new WildAnimal("Alex", true, 5);
console.log(lion);
var HomeAnimal = /** @class */ (function (_super) {
    __extends(HomeAnimal, _super);
    function HomeAnimal(name, isPredator, age) {
        var _this = _super.call(this, name, isPredator) || this;
        _this.age = age;
        return _this;
    }
    return HomeAnimal;
}(Animal));
var dog = new HomeAnimal("Kuchuk", true, 13);
console.log(dog);
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    return Car;
}());
var NewCar = /** @class */ (function (_super) {
    __extends(NewCar, _super);
    function NewCar(brand, year) {
        var _this = _super.call(this, brand) || this;
        _this.year = year;
        return _this;
    }
    return NewCar;
}(Car));
var bmw = new NewCar("BMW", 2023);
console.log(NewCar);
