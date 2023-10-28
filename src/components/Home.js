import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import load from "../loading.json";

const Home = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const aboutPage = async () => {
    try {
      setLoading(true);
      const res = await fetch("/home", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.error) {
        throw new Error(res.error);
      }

      setName(data.name);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    aboutPage();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading">
          <Lottie animationData={load} />
        </div>
      ) : (
        ""
      )}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h1>
          Welcome<br></br>
          {name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : ""}
          <br></br>
          {name ? "Happy,  to see you back" : "We are MERN Developers"}{" "}
        </h1>
      </div>
    </>
  );
};

export default Home;
