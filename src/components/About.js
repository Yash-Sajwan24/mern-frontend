import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name : '', 
    email: '', 
    phone : '',
  });
  

  const callAboutUsPage = async () => {
    try{

      const res = await fetch("/about", {
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
      
    }
    catch(err){
      navigate('../login');
    }
  }

  useEffect(()=> {
    callAboutUsPage();
  }, []);

  return (
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
        <h3>Name</h3>  {data.name} <br></br><br></br>
        <h3>Email</h3>  {data.email}<br></br><br></br>
        <h3>Phone</h3>  {data.phone}<br></br><br></br>

    </div>
  );
};

export default About;
