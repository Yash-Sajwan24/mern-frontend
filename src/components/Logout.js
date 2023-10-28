import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../App";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://mernbackend-0so8.onrender.com/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
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
