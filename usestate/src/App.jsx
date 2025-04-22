import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
import "./App.css";
import { useState } from "react";

function App() {
  // destructuring state and passing it to RestaurantsContainer
  const [restaurantState, setRestaurantState] = useState([...restaurants])
  return (
    <div className="App">
      <RestaurantsContainer restaurants={restaurantState}/>
    </div>
  );
}

export default App;
