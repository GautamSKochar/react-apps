import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Biryani",
    description: "Paneer and veg biryani",
    price: 222.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 160.5,
  },
  {
    id: "m3",
    name: "Burger King",
    description: "American, Veg Burger",
    price: 122.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 150.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    // <li key={meal.id}>{meal.name}</li>
    <MealItem
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
      id={meal.id}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
