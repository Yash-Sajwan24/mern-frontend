import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Lottie from 'lottie-react';
import load from '../loading.json';


const About = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const callAboutUsPage = async () => {
    try{
      setLoading(true);
      const res = await fetch("https://mern-backend-fawn.vercel.app/about", {
        method: "GET", 
        headers : {
          Accept: 'application/json', 
          "Content-Type" : "application/json",
        }, 
        credentials : "include",
      });

      let data = await res.json();
      if(res.error){
        throw new Error(res.error);
      }
      setData(data);

      setLoading(false);
    }
    catch(err){
      setLoading(false);
      navigate('../login');
    }
  }

  useEffect(()=> {
    callAboutUsPage();
  }, []);

  return (
    <>
     {loading ?  <div className='loading'>
          <Lottie animationData={load} />
      </div>: ""}
    
     <div
      style={{
        width: "50%",
        height: "400px",
        backgroundColor: "white",
        margin: "auto",
        marginTop: "50px",
        borderRadius : "20px", 
        padding: "20px", 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "center",
        fontSize : "20px"
      }}
    >
        <h3>Name</h3>  {data.name ? data.name[0].toUpperCase() + data.name.slice(1).toLowerCase() : data.name} <br></br><br></br>
        <h3>Email</h3>  {data.email}<br></br><br></br>
        <h3>Phone</h3>  {data.phone}<br></br><br></br>

    </div>
    </>
   
  );
};

export default About;
