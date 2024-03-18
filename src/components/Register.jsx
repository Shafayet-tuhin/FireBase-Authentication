import React, { useState } from 'react'
import { createUserWithEmailAndPassword , sendEmailVerification } from "firebase/auth";
import auth from '../firebase/firebase.config';


const Register = () => {

    const [error , setError] = useState("")
 
    const handleRegister = (e) => {
        e.preventDefault() ;
        const email = e.target.email.value ;
        const password = e.target.password.value ;

        console.log(email, password) ;

        // create User

        createUserWithEmailAndPassword(auth , email , password)
        .then((res)=>{
                console.log(res) ;
                setError("") ;
        })
        .catch((er)=> {
             console.log(er.message) ;
             setError("Sorry Email Already Exists") ;
            
        })
    }

    return (
        <div >
            <div className='mx-auto md:w-1/3'>
                <h2 className=' text-3xl mb-8'>
                     Register
                </h2><br />

                <form onSubmit={handleRegister}>
                    <input className='mb-4 w-3/4 py-2 px-4 border rounded-md text-center' type="email" name='email' placeholder='Enter Your E-mail' required/>  <br /><br />
                    <input className='mb-4 w-3/4 py-2 px-4 border rounded-md text-center' type="password" name='password' placeholder='Enter Your Password' required/> <br /> <br />
                    <button className="btn btn-secondary w-3/4 border rounded-md text-2xl">Register</button>
                </form>
                {
                   error && <p className='text-red-400 text-xl'>{error}</p>
                }
            </div>
        </div>
    )
}

export default Register