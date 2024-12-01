import React, { useContext } from "react";
import { AuthContext } from "../proverder/AuthProvuder";
import { Link } from "react-router-dom";

export default function Singnin() {
  const { signInUser } = useContext(AuthContext);
  const handelSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        // updated last login time
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInFo = { email, lastSignInTime };
        fetch(`http://localhost:5000/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInFo),
        })
          .then((res) => res.json())
          .then((date) => {
            console.log("sign in info updated in bd", date);
          });
      })
      .catch((erroe) => {
        console.log(erroe);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="">
        <div className="text-center pb-5">
          <h1 className="text-5xl font-bold">Sing In</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            perspiciatis natus quam maxime quas similique harum incidunt
            asperiores dolore quae, odio magnam, voluptate ducimus error vero
            dolor odit rerum nihil!
          </p>
        </div>
        <div className="card bg-base-100 w-full mx-auto max-w-lg shrink-0 shadow-2xl">
          <form onSubmit={handelSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
            <p>
              New to coffee deinker :<Link to="/signup"> Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
