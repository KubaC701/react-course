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

const CarItem = (): JSX.Element => <li></li>;

const CarsList = () => (
  <ul>
    {cars.map((car) => (
      <CarItem />
    ))}
  </ul>
);

const Props = () => {
  return <CarsList />;
};

export default Props;
