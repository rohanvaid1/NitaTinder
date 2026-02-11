import React from 'react'
import { BASE_URL } from '../utils/constants';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = React.useState("madhu@gmail.com");
  const [password, setPassword] = React.useState("Madhu@123456");

  const handleLogin = async () => {
      try {
          console.log("Attempting login with:", { email, password: "***" });
          const res = await axios.post(BASE_URL + "login", {
            email, 
            password,
          }, {
            withCredentials: true,
          });
          console.log("Login successful:", res.data);
      } catch (error) {
          console.error("Login failed:", error);
          if (error.response) {
            console.error("Error details:", error.response.data);
          }
      }
  }

  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 justify-center mx-auto mt-8 ">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4" onClick={handleLogin}>Login</button>
      </fieldset>
    </div>
  )
}

export default Login
