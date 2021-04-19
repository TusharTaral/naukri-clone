import React, { useState } from "react";
const initState = {
  name: "",
  password: ""
};
export const Login = () => {
  const [data, setData] = useState(initState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    let payload = {
      ...data,
      [name]: value
    };
    setData(payload);
  };
  const handleLogin = () => {
    if (data.password !== "" && data.name !== "") {
      let payload = {
        password: data.password,
        name: data.name
      };
      
      setData(initState);
    } else {
      alert("Enter all data");
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <div>
        Username :{" "}
        <input
          value={data.name}
          name="name"
          onChange={handleChange}
          type="text"
        />
      </div>
      <br />
      <div>
        Password :{" "}
        <input
          value={data.password}
          name="password"
          onChange={handleChange}
          type="password"
        />
      </div>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
};