
import React, { useState } from 'react';

export default function Login() {

    const [newobject, setnewobject] = useState({emailPhone:"",password:""})

    // console.log(newobject)

    function handlechange(e){
        // console.log(e.target.value);
        // console.log(e.target.name);
            setnewobject({...newobject,[e.target.name]:e.target.value})
            // console.log(newobject)
    }
    function handlesubmit(e){
        e.preventDefault()
        console.log(newobject)
    
       if( newobject.emailPhone===Number){
            
       }
    }



  return (
      <section className='login-page'>


    <div className='left-login'>

        <div className='content'>
        <h1 className='title-login'>Laundry Service</h1>
        <p className='para-login'>Doorstep Wash & Dryclean service</p>
        <div className='btn-sec'>
            <p>Don't Have An Account?</p>
            <button className='reg-btn'>Register</button>
        </div>

        </div>
    </div>


  <div className='right-login'>
      <div className='form-login'>
      <h3>SIGN IN</h3>
      <form action="" onSubmit={handlesubmit}>
        <div className='field'>
            <label htmlFor="Email/phone">Mobile/Email</label>
            <input type="text" id='Email/phone'onChange={handlechange} name="emailPhone"/>
        <div className='under-line'></div>
        </div>
        <div className='field'>
            <label htmlFor="password">Password</label>
            <input type="password" id='password'onChange={handlechange} name="password"/>
            <div className='under-line'></div>
            <div className='forgot'>
                <p>Forgot Password?</p>
            </div>
        </div>

        <button className='btn-signin'>Sign In</button>
      </form >
      </div>

  </div>
  </section>
  )
}
