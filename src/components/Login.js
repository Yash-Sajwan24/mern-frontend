import React, { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import Lottie from "lottie-react";
import load from "../loading.json";

import { UserContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("https://mern-backend-fawn.vercel.app/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    setLoading(false);

    if (data.error || !data) {
      window.alert([data.error]);
      console.log("invalid");
    } else {
      dispatch({ type: "USER", payload: true });
      console.log("success");
      navigate("../about");
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
      <form method="POST" onSubmit={handleLogin}>
        <div className="col" style={{ marginTop: "50px" }}>
          <input
            type="email"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Email"
            aria-label="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Password"
            aria-label="Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
            Login
          </button>
        </div>
      </form>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <NavLink to="/signup"> Create a new account</NavLink>
      </div>
    </>
  );
};

export default Login;
