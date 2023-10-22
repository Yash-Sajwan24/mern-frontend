import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  let name, value;
  const handleInput = (e) => {
   
    name = e.target.ariaLabel;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value
    });
  };
  return (
    <>
      <form>
        <div className="col">
          <input
            type="text"
            className="form-control w-25 mx-auto mt-5 "
            placeholder="Name"
            aria-label="name"
            value={user.name}
            onChange={handleInput}
          />
          <input
            type="email"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Email"
            aria-label="email"
            value={user.email}
            onChange={handleInput}
          />
          <input
            type="password"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Password"
            aria-label="password"
            value={user.password}
            onChange={handleInput}
          />
          <input
            type="number"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Phone"
            aria-label="phone"
            value={user.phone}
            onChange={handleInput}
          />
          <button
            style={{
              backgroundColor: "yellow",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
            type="submit"
            className="w-25 mx-auto mx-auto mt-3 bg-dark"
          >
            {" "}
            Register
          </button>
        </div>
      </form>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <NavLink to="/login"> I am already Registered</NavLink>
      </div>
    </>
  );
};

export default Signup;
