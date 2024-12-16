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