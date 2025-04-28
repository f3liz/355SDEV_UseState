import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
import "./App.css";
import { useState } from "react";
import RestaurantForm from "./components/RestaurantForm.jsx";

function App() {
  // destructuring state and passing it to RestaurantsContainer
  const [restaurantState, setRestaurantState] = useState([...restaurants]);

  const [toggleRestaurantForm, setToggleRestaurantForm] = useState(false);

  const [bookings, setBookings] = useState([]);



  const handleToggleForm = () => setToggleRestaurantForm(prevState => !prevState);

  const handleSearch = e => {
    const updatedRestaurants = restaurants.filter(restaurant => 
      restaurant.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(updatedRestaurants);
    setRestaurantState(updatedRestaurants);
  };

  const addBooking = newBooking => setBookings(prev => [...prev, newBooking]);

  return (
    <div className="App">
      <input type="text" placeholder="Search" onChange={handleSearch}/>
      <button onClick={handleToggleForm}>Add Booking</button>
      {/* if toggleRestaurantForm is true, display form, else dont */}
      {toggleRestaurantForm && <RestaurantForm addBooking={addBooking}/>}
      {bookings.map(booking => (
        <div>
          Name: {booking.name} | Date: {booking.date} | Number of Guests: {booking.guests}
        </div>
      ))}
      <RestaurantsContainer restaurants={restaurantState}/>
    </div>
  );
}

export default App;
