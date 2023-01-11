interface Car {
  id: number;
  brand: string;
  model: string;
}

const cars: Car[] = [
  { id: 1, brand: "BMW", model: "M3" },
  { id: 2, brand: "Mercedes", model: "C63" },
  { id: 3, brand: "Audi", model: "RS6" },
];

const CarsList = () => {
  return (
    <ul>
      {cars.map((car) => (
        <li key={car.id}>
          <button onClick={() => console.log(car)}>
            <span>{car.brand}</span>
            <span>{car.model}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

const Events = () => {
  return <CarsList />;
};

export default Events;
