import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        navigate("../login");
        if (res.error) {
          throw new Error(res.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <></>;
};

export default Logout;
