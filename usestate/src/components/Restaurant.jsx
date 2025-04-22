import { useState } from "react";

function Restaurant(props) {
  // state for hours and menu
  const [hours, setHours] = useState(false);
  const [menu, setMenu] = useState(false);

  // good practice for updating state variable
  const handleHours = () => {
    setHours((prev) => !prev);
  };
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
      <button onClick={handleHours}>Hours</button>
      <button onClick={handleMenu}>Menu</button>
      {/* to show menu and loop through menu items if state is true */}
      {menu && (
        <ul>
          {props.restaurant.menu.map( item => (
            <li>{`${item.item} $${item.price}`}</li>
          ))}
        </ul>
        
      )}
      {/* to show times and loop through days and hours if state is true */}
      {hours && (
        <ul>
          {Object.entries(props.restaurant.hours).map(([day, time]) => (
            <li>{day.charAt(0).toUpperCase() + day.slice(1)}:{" "}
            {time}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Restaurant;
