import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
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

  const handleSignUp =  async (e) => {
    e.preventDefault();

    const {name, email, password, phone} = user;

    const res = await fetch("/register", {
        method : "POST", 
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name, email, password, phone,
        })
    });

    const data =await res.json();

    if(!data || data.status === 422){
        window.alert("Invalid Registration");
        console.log("invalid");
    }
    else{
        console.log("success");
        navigate('../login');
    }

  }
  return (
    <>
      <form method="post" onSubmit={handleSignUp}>
        <div className="col">
          <input
            type="text"
            className="form-control w-25 mx-auto mt-5 "
            placeholder="Name"
            aria-label="name"
            value={user.name}
            onChange={handleInput}
            required
          />
          <input
            type="email"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Email"
            aria-label="email"
            value={user.email}
            onChange={handleInput}
            required
          />
          <input
            type="password"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Password"
            aria-label="password"
            value={user.password}
            onChange={handleInput}
            required
          />
          <input
            type="number"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Phone"
            aria-label="phone"
            value={user.phone}
            onChange={handleInput}
            required
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
