import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Lottie from "lottie-react";
import load from "../loading.json";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  let name, value;
  const handleInput = (e) => {
    name = e.target.ariaLabel;
    value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { name, email, password, phone } = user;
    setLoading(true);
    const res = await fetch("https://mern-backend-fawn.vercel.app/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phone,
      }),
    });

    const data = await res.json();

    setLoading(false);

    if (data.error || !data) {
      window.alert([data.error]);
      console.log("invalid");
    } else {
      console.log("success");
      navigate("../login");
    }
  };
  return (
    <>
      {loading ? (
        <div className="loading">
          <Lottie animationData={load} />
        </div>
      ) : (
        ""
      )}
      <form method="post" onSubmit={handleSignUp}>
        <div className="col">
          <input
            type="text"
            className="form-control w-25 mx-auto mt-5 "
            placeholder="Name"
            aria-label="name"
            required
            value={user.name}
            onChange={handleInput}
          />
          <input
            type="email"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Email"
            aria-label="email"
            required
            value={user.email}
            onChange={handleInput}
          />
          <input
            type="password"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Password"
            aria-label="password"
            required
            value={user.password}
            onChange={handleInput}
          />
          <input
            type="number"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Phone"
            aria-label="phone"
            required
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
