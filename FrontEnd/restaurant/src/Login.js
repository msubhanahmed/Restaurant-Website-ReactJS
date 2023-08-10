import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './assets/sideimg.jpg';
import './index.css'
function Login({onLogin})
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.loginName.value, event.target.loginPassword.value);
    onLogin(event.target.loginName.value, event.target.loginPassword.value);
  };

  return (
    <div className="loginsection">
      <div className="container">
        <div className="col-12 col-sm-7 d-block">
            <form className="loginForm form" onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginName">Email</label>
                <input type="text" id="loginName" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginPassword">Password</label>
                <input type="password" id="loginPassword" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)}/>
              </div>
              <div className="form-outline mb-4">
                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
              </div>
              <div className="form-outline mb-4 text-center">
                <p>Not a member? <a href="#!">Register</a></p>
              </div>
            </form>
        </div>
        {/* <div id="loginsideimg" className="d-none d-sm-block col-sm-5">
          <img alt="foodimg" src={require( "./assets/sideimg.jpg")}/>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
