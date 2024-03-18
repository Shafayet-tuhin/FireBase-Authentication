import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa6"; // icons
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const DaisyUiLogin = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [see, setSee] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const termsAccepted = e.target.terms.checked;

    console.log(email, password, termsAccepted);
    setError("");


    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (!termsAccepted) {
      setError("You must accept the terms and conditions");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setSuccess(true);
        sendEmailVerification(res.user)
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been saved.  Please Varify your email",
              showConfirmButton: false,
              timer: 1500
            });
          })
      })
      .catch((err) => {
        setError("This Email Already Exists");
        console.log(err.message);
        setSuccess(false);
      });


  };

  const seePassword = () => {
    setSee(!see);
  }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
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
              />
            </div>
            <div className="form-control">

              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={see ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />

                <button className="btn btn-info absolute ml-2" onClick={seePassword}>
                  {see ? <FaEyeSlash /> : <FaEye />}</button>
              </div>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>

              <div className="flex gap-2">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms"> Accept Terms & Conditions </label>
              </div>

            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">
                {success ? "Successfully Registered" : "Register"}
              </button>
            </div>
            {error && <p className="text-red-400 text-xl">{error}</p>}

            <p>Already a user? <Link to='/login'><button className='btn btn-ghost'>Click Here</button></Link> </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DaisyUiLogin;
