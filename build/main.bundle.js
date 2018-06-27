"use strict";

function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};

Phone.prototype.makeACall = function (number) {
    console.log("The phone brand is " + this.brand + " is calling the number " + number + ".");
};

Phone.prototype.pressButton = function (button) {
    console.log("Beep");
};

var iPhone6S = new Phone("Apple", 2250, "silver");
var samsungGalaxyS6 = new Phone("Samsung", 3200, "black");
var onePlusOne = new Phone("One Plus", 5032, "rose");

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();

iPhone6S.makeACall(123456789);
samsungGalaxyS6.makeACall(23948566);
onePlusOne.makeACall(943504534);

onePlusOne.pressButton(1);

//exercise 2

function Button(text) {
    this.text = text || 'Hello';
}

Button.prototype = {
    create: function create() {
        var self = this;
        this.element = document.createElement('Button');
        this.element.innerHTML = this.text;
        this.element.addEventListener('click', function () {
            alert(self.text);
        });
        document.body.appendChild(this.element);
    }
};

var btn1 = new Button('Hello!');
btn1.create();
