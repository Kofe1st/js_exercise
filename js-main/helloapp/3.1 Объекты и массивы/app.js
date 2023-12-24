function Car(brand, year) {
    this.brand = brand;
    this.year = year;
}
var car1 = new Car("Renault Symbol", 2016);
var car2 = new Car("Skoda", 2022);
console.log("Марка - " + car1.brand + ", год выпуска - " + car1.year);
console.log("Марка - " + car2.brand + ", год выпуска - " + car2.year);
