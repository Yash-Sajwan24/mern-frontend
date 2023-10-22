import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <form > 
    <div className="col" >
    <input type="text" className="form-control w-25 mx-auto mt-5 " placeholder="Name" aria-label="Name" />
    <input type="email" className="form-control w-25 mx-auto mt-3 " placeholder="Email" aria-label="Email" />
    <input type="password" className="form-control w-25 mx-auto mt-3 " placeholder="Password" aria-label="Password" />
    <input type="number" className="form-control w-25 mx-auto mt-3 " placeholder="Phone" aria-label="Phone" />
    <button style={{  backgroundColor: "yellow", display: "flex", alignItems: "center", justifyContent: "center"}} type='submit' className='w-25 mx-auto mx-auto mt-3'> Register</button>
    </div>
    </form>

    <div style={{textAlign: "center", marginTop: "50px"}}> 
         <NavLink to="/login" > I am already Registered</NavLink>
    </div>
    
 
    </>
  )
}

export default Signup