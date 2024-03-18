import React, { useRef, useState } from "react";
import { signInWithEmailAndPassword , sendPasswordResetEmail} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Login = () => {
    const [error, setError] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const emailRef = useRef(null);
    
    const handleLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res);
          setError(false);
          setLoginSuccess(true); // Update login status to true
         
          Swal.fire({
            title: "Login Successfull",
            icon: "success"
          });

        })
        .catch((err) => {
          console.log("Error", err.message);
          setError(true);
          setLoginSuccess(false); // Update login status to false if login fails
        });
    };
  
    const handleForget = () => {
      const email = emailRef.current.value;
    
      if (!email) {
        console.log("Provide correct email");
        return; // Exit early if email is not provided
      }
    
      sendPasswordResetEmail(auth, email)
        .then((res) => {
          alert("Please Check your email")
        })
        .catch((err) => console.log("Error sending password reset email", err.message));
    };

    const hadleError = (el) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Email or Password", 
          });
    }
  
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                  ref={emailRef}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
                <label className="label">
                  <a
                    onClick={handleForget}
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  {loginSuccess ? "Login Successful" : "Login"}
                </button>
              </div>
  
              <p>
                Dont have an Account?{" "}
                <Link to="/daizyui">
                  <button className="btn btn-ghost">Click Here</button>
                </Link>{" "}
              </p>
  
              {error && hadleError()}
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
  