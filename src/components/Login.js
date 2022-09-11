import React, { useState } from 'react'

const Login = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const hendleLogin = ()=>{
    console.log(email,password)
  }
  return (
    <div className='login'>
    <h1>Login</h1>

    <form>
      <input type={"email"} onChange={(e)=>setEmail(e.target.value)}   placeholder={'Email'} />
      <input type={"password"}  onChange={(e)=>setPassword(e.target.value)}  placeholder={'Password'} />
      <div className="pass"><a href="/">Forget Password</a></div>
      <button type={'submit'} onClick = {hendleLogin}>Login</button>
      </form> 

   </div>
  )
}

export default Login