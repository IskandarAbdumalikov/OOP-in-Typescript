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
//OOP
console.log("//encapsulation\\");
var Laptop = /** @class */ (function () {
    function Laptop(brand, year, ssd, id) {
        this.brand = brand;
        this.id = id;
        this.ssd = ssd;
        this.year = year;
    }
    Laptop.prototype.getDetails = function () {
        return "Laptop : ".concat(this.brand, "  ").concat(this.id, " ").concat(this.year, "  ").concat(this.ssd);
    };
    return Laptop;
}());
var asus = new Laptop("Asus", 2024, 225, 1);
console.log(asus.getDetails());
var Car = /** @class */ (function () {
    function Car(brand, year, distance, color) {
        this.brand = brand;
        this.color = color;
        this.distance = distance;
        this.year = year;
    }
    Car.prototype.getDetails = function () {
        return "Car : ".concat(this.brand, "  ").concat(this.color, " ").concat(this.year, "  ").concat(this.distance);
    };
    return Car;
}());
var Nexia = new Car("Nexia", 2024, 2500, "black");
console.log(Nexia.getDetails());
var Phone = /** @class */ (function () {
    function Phone(brand, year, price, color) {
        this.brand = brand;
        this.color = color;
        this.price = price;
        this.year = year;
    }
    Phone.prototype.getDetails = function () {
        return "Phone : ".concat(this.brand, "  ").concat(this.color, " ").concat(this.year, "  $").concat(this.price);
    };
    return Phone;
}());
var Samsung = new Phone("Samsung", 2024, 200, "black");
console.log(Samsung.getDetails());
var Book = /** @class */ (function () {
    function Book(name, author, paper, price) {
        this.name = name;
        this.price = price;
        this.paper = paper;
        this.author = author;
    }
    Book.prototype.getDetails = function () {
        return "Book : ".concat(this.name, " ").concat(this.price, " so'm ").concat(this.author, "  ").concat(this.paper, "varoq");
    };
    return Book;
}());
var OtkanKunlar = new Book("O`tkan Kunlar", "o`tkir Hoshimov", 250, 2500);
console.log(OtkanKunlar.getDetails());
//abstracting
var Payment = /** @class */ (function () {
    function Payment(price) {
        this.price = price;
    }
    return Payment;
}());
var CreditPayment = /** @class */ (function (_super) {
    __extends(CreditPayment, _super);
    function CreditPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreditPayment.prototype.getPayment = function () {
        return "Amount: ".concat(this.price);
    };
    return CreditPayment;
}(Payment));
var pay = new CreditPayment(230);
console.log(pay.getPayment());
