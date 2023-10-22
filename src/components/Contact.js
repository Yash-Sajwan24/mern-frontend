import React from "react";

const Contact = () => {
  return (
    <>
         <form > 
    <div className="col" style={{marginTop : "50px", display : "flex", flexDirection: "column",  justifyContent: "center", alignItems : "center"}} >

    <input type="text" className="form-control w-25 mx-auto mt-3 " placeholder="Name" aria-label="Name" />
    <input type="email" className="form-control w-25 mx-auto mt-3 " placeholder="Email" aria-label="Email" />
    <input type="number" className="form-control w-25 mx-auto mt-3 " placeholder="Phone" aria-label="Phone" />
    <textarea style={{marginTop: "20px", height: '100px'}}  className="form-control w-25" aria-label="With textarea" placeholder="Message"></textarea>
    <button style={{  backgroundColor: "yellow", display: "flex", alignItems: "center", justifyContent: "center", color: "white"}} type='submit' className='w-25 mx-auto mx-auto mt-3 bg-dark'> Send Message</button>
    </div>
    </form>
    </>
  );
};

export default Contact;
