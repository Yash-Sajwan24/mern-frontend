import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch('/signin', {
      method : "POST", 
      headers : {
        "Content-Type" : 'application/json', 
      }, 
      body: JSON.stringify({
        email, password
      })
    });

    const data = await res.json();

    setLoading(false);

    if(data.error || !data){
      window.alert([data.error]);
      console.log("invalid");
    }
    else {
      console.log("success");
      navigate('../about');
    }

  }

  return (
    <>
    {loading ? <h1 style={{position: "fixed", top : "50%", left: "50%", transform : "translate(-50%, -80%)"}}>Loading...</h1>: ""}
      <form method="POST" onSubmit={handleLogin}>
        <div className="col" style={{ marginTop: "50px" }}>
          <input
            type="email"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Email"
            aria-label="Email"
            required
            value={email}
            onChange={(e)=> {setEmail(e.target.value)}}
          />
          <input
            type="password"
            className="form-control w-25 mx-auto mt-3 "
            placeholder="Password"
            aria-label="Password"
            required
            value={password}
            onChange={(e)=> {setPassword(e.target.value)}}
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
    </>
  );
};

export default Login;
