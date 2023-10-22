import React from 'react'

const Login = () => {
  return (
    <>
    <form > 
    <div className="col" style={{marginTop : "50px"}} >
    <input type="email" className="form-control w-25 mx-auto mt-3 " placeholder="Email" aria-label="Email" />
    <input type="password" className="form-control w-25 mx-auto mt-3 " placeholder="Password" aria-label="Password" />
    <button style={{  backgroundColor: "yellow", display: "flex", alignItems: "center", justifyContent: "center", color: "white"}} type='submit' className='w-25 mx-auto mx-auto mt-3 bg-dark'> Login</button>
    </div>
    </form>
    </>
  )
}

export default Login