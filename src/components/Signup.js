import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Signup = () => {

            const [name,setName]=useState('')
            const[email,setEmail]=useState('')
            const[password,setPassword]=useState('')
           const navigate = useNavigate()
            const collectData = async ()=>{
                    console.log(name,email,password)
                    let result = await fetch('',{
                        method:'post',
                        body:JSON.stringify({name,email,password}),
                        headers:{
                            'content-Type':'application/json'
                        },
                    })
                    result = await result.json()
                    if(result){
                        navigate('/')
                    }
            }
  return (
   <>
    <div className='signup'>
        <h1>Sign Up</h1>
        <h2>Create Account</h2>
        <form>
            <input type={"text"} value = {name} onChange={(e)=>setName(e.target.value)} placeholder={'Name'} />
            <input type={"email"} value = {email} onChange={(e)=>setEmail(e.target.value)}  placeholder={'Email'} />
            <input type={"password"} value = {password} onChange={(e)=>setPassword(e.target.value)}  placeholder={'password'} />
            <button type={"submit"} onClick={collectData}>Signup</button>
        </form>

    </div>

   </>
  )
}

export default Signup