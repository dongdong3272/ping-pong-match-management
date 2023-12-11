import { registerPlayer } from "../api.js";
import { useState } from "react";

export default function Register() {
  // Create a state for the fullname
  const [fullname, setFullname] = useState("");

  // Handle register button click
  const handleRegister = async (event) => {
    event.preventDefault();
    setFullname("");
    const data = await registerPlayer(fullname);
    console.log(data);
  };

  const handleChange = (event) => {
    setFullname(event.target.value);
  };

  return (
    <div className="register-board">
      <h1>Register</h1>
      <form>
        <label htmlFor="name">Full Name: </label>
        <input type="name" id="name" value={fullname} onChange={handleChange} />
        <button type="submit" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}
