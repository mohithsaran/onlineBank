import React, { useState } from 'react'
import './Registration.css'
import axios from 'axios'

const Registration = () => {
    const [signup,setSignup]=useState({
        username :'',
        email:'',
        password:'',
        cpassword:'',
        accountno:'',
        branch:'',
        phno:''
    })
    const handleSignup=async(e)=>{
        e.preventDefault()
        try{
            await axios.post('http://localhost:3001/signup',signup);
            console.log('Signup Successful')
        }
        catch(error){   
            console.log('Signup error',error)
        }
        
    }
    const handleClear=()=>{
        setSignup({
            username :'',
            email:'',
            password:'',
            cpassword:'',
            accountno:'',
            branch:'',
            phno:''
        })
    }
  return (
    <div className='signup-container'>
        <div className='image-signup-container'></div>
        <div className='signup-text'>
        <form onSubmit={handleSignup}>
            <div>
            <label>Username:</label>
            <input type='text' value={signup.username} onChange={(e)=>setSignup({...signup,username:e.target.value})} required></input>
            </div>
            <div>
                <label >Email:</label>
                <input type='email' value={signup.email} onChange={(e)=>setSignup({...signup,email:e.target.value})} required></input>
            </div>
            <div>
                <label >Password:</label>
                <input type='password' value={signup.password} onChange={(e)=>setSignup({...signup,password:e.target.value})} maxLength={16} required></input>
            </div>
            <div>
                <label >Confirm Password:</label>
                <input type='password' value={signup.cpassword} onChange={(e)=>setSignup({...signup,cpassword:e.target.value})} maxLength={16} required></input>
            </div>
            <div>
                <label >Account Number</label>
                <input type='number' value={signup.accountno} onChange={(e)=>{if(e.target.value.length<=14){setSignup({...signup,accountno:e.target.value})}}} required></input>
            </div>
            <div>
                <label >Branch</label>
                <input type='text' value={signup.branch} onChange={(e)=>setSignup({...signup,branch:e.target.value})} required></input>
            </div>
            <div>
                <label >Phone Number:</label>
                <input type='number' value={signup.phno} onChange={(e)=>{if(e.target.value.length<=10){setSignup({...signup,phno:e.target.value})}}}  required></input>
            </div>
            <div>
                <button type='submit'>Signup</button>
                <button type='submit' onClick={handleClear}>Login</button>
            </div>

        </form>
        </div>
    </div>
  )
}

export default Registration