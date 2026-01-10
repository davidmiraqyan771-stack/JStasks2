Object.myGroupBy = function (objects, callback) {
  if (typeof callback != "function" || typeof objects != "object") {
    throw new TypeError("Its not matching");
  }

  let result = {};

  for (let i = 0; i < objects.length; i++) {
    let key = `${callback(objects[i])}`;
    !result[key] ? result[key] = [objects[i]] : result[key][result[key].length] = objects[i];
  }

  return result;
};

const cars = [
  { brand: "Chevrolet", model: "Impala", year: 2014, price: 9000, used: true },
  { brand: "Toyota", model: "Camry", year: 2019, price: 17000, used: true },
  { brand: "BMW", model: "3 Series", year: 2020, price: 25000, used: true },
  { brand: "Toyota", model: "Prius", year: 2017, price: 12000, used: true },
  { brand: "BMW", model: "i3", year: 2016, price: 14000, used: true },
  { brand: "Tesla", model: "Model 3", year: 2022, price: 39999, used: false },
  { brand: "BMW", model: "X5", year: 2021, price: 48000, used: false },
  { brand: "Tesla", model: "Model S", year: 2019, price: 55000, used: true },
  { brand: "Ford", model: "F-150", year: 2016, price: 23000, used: true },
  { brand: "Toyota", model: "Corolla", year: 2018, price: 15000, used: true },
];

const result = Object.myGroupBy(cars, ({ year }) => year % 4 === 0 ? "leap year" : "normal year");
console.log(result);
