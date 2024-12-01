import { useContext } from "react";
import { AuthContext } from "../proverder/AuthProvuder";
import { data } from "autoprefixer";

export function SingUp() {
  const { createUser } = useContext(AuthContext);
  const handelSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        const createdAt = result?.user?.metadata?.creationTime;

        const newUser = { name, email, createdAt };

        // save new user info to the database
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              alert("user created in db");
            }
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="">
          <div className="text-center pb-5">
            <h1 className="text-5xl font-bold">Sing up</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              perspiciatis natus quam maxime quas similique harum incidunt
              asperiores dolore quae, odio magnam, voluptate ducimus error vero
              dolor odit rerum nihil!
            </p>
          </div>
          <div className="card bg-base-100 w-full mx-auto max-w-lg shrink-0 shadow-2xl">
            <form onSubmit={handelSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
