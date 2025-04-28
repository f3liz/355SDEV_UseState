import { useState } from "react";
// controlled forms
// means we control the state of our form with react

const RestaurantForm = ({addBooking}) => {
  // do not change state out of setter function
  // never do -> formData.rental = "something" - this is bad
  const [formData, setFormData] = useState({
    name: "", 
    date: "", 
    guests: 1
  });

  const handleChange = (e) => {
    // value = what is passed in
    // name = key for input
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    console.log(formData);

    // [variable] must be in bracket notation, brackets mean it is a variable
    setFormData(prev => {
      return {...prev, [name]:value};
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking(formData);
  };

  return (
    <div
      style={{
        padding: "10px",
        marginTop: "20px",
        borderTop: "2px solid #ccc",
      }}
    >
      <h2>Book a Stay</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required value={formData.name} onChange={handleChange}/>
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date" required value={formData.date} onChange={handleChange}/>
        </label>
        <br />
        <label>
          Number of Guests:
          <input type="number" name="guests" min="1" value={formData.guests} onChange={handleChange}/>
        </label>
        <br />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default RestaurantForm;
