import React, { useEffect, useState } from "react";

const Contact = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const contactPageData = async () => {

    try{
      setLoading(true);
      const res = await fetch('/getdata', {
        method: "GET", 
        headers : {
          "Content-Type": "application/json",
        }
      });
  
      const data = await res.json();

      if(res.eror){
        throw new Error (res.error);
      }

      setData(data);
      setLoading(false);
    }

    catch(err){
      setLoading(false);
      console.log(err);
    }
  }


  useEffect(()=> {
    contactPageData();
  } , [])

  return (
    <>
     {loading ? <h1 style={{position: "fixed", top : "50%", left: "50%", transform : "translate(-50%, -80%)"}}>Loading...</h1>: ""}
      <form>
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
            placeholder="Name"
            aria-label="Name"
            value={data.name}
            onChange={(e) => {setData(e.target.value)}}
          />
          <input
            type="email"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Email"
            aria-label="Email"
            value={data.email}
            onChange={(e) => {setData(e.target.value)}}
          />
          <input
            type="number"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Phone"
            aria-label="Phone"
            value={data.phone}
            onChange={(e) => {setData(e.target.value)}}

          />
          <textarea
            style={{ marginTop: "20px", height: "100px" }}
            className="form-control w-25"
            aria-label="With textarea"
            placeholder="Message"
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
