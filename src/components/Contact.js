import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Lottie from 'lottie-react';
import load from '../loading.json';

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const inputData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleContact = async (e) => {
    e.preventDefault();

    setLoading(true);
    const { name, email, phone, message } = data;
    try{

      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });
  
      const fetchedData = await res.json();
      setLoading(false);
  
      console.log(res.status);
  
      if (res.error || !fetchedData) {
        window.alert([fetchedData.error]);
        console.log("invalid");
      } 
      else {
        console.log("success");
        setData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }

    }
    catch(err){
      setLoading(false);
      navigate('../login');
      window.alert("Login first");
    }
   
  };

  const contactPageData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const fetchedData = await res.json();

      if (res.eror) {
        throw new Error(res.error);
      }

      setData({
        ...data,
        name: fetchedData.name,
        email: fetchedData.email,
        phone: fetchedData.phone,
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    contactPageData();
  }, []);

  return (
    <>
        {loading ?  <div className='loading'>
          <Lottie animationData={load} />
      </div>: ""}
      <form method="post" onSubmit={handleContact}>
        <div
          className="col"
          style={{
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            className="form-control w-25 mx-auto mt-3 "
            name="name"
            placeholder="Name"
            aria-label="name"
            value={data.name ? data.name[0].toUpperCase() + data.name.slice(1).toLowerCase() : data.name}
            onChange={inputData}
          />
          <input
            type="email"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Email"
            name="email"
            aria-label="email"
            value={data.email}
            onChange={inputData}
          />
          <input
            type="number"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Phone"
            name="phone"
            aria-label="phone"
            value={data.phone}
            onChange={inputData}
          />
          <textarea
            style={{ marginTop: "20px", height: "100px" }}
            className="form-control w-25"
            name="message"
            aria-label="message"
            placeholder="Message"
            value={data.message}
            onChange={inputData}
          ></textarea>
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
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
