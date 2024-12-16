const data = [
  {
    type: "Toyota Corolla",
    avgConsumption: 8.8,
    fuelAmount: 32
  },
  {
    type: "Skoda Octavia",
    avgConsumption: 7.2,
    fuelAmount: 25
  },
  {
    type: "Fiat Uno",
    avgConsumption: 6.1,
    fuelAmount: 24
  }
]

function carRenting(cars, distance) {
  const goodCars = [];
  for (const car of cars) {
    const maxDistance = (car.fuelAmount / car.avgConsumption) * 100;
    if (maxDistance >= distance) {
      goodCars.push(car.type);
    }
  }
  return goodCars.length > 0 ? goodCars : null;

}
  
module.exports = carRenting