import React from "react";

const About = () => {
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
        <h3>Name</h3>  Yash Sajwan <br></br><br></br>
        <h3>Email</h3>  yashsajwan@gmail.com<br></br><br></br>
        <h3>Phone</h3>  0293840382049<br></br><br></br>

    </div>
  );
};

export default About;
