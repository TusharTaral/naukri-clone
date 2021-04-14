import React, { useState } from "react";


const initState = {
  name: "",
  email: "",
  password: "",
  city: "",
  mobile: "",
};

export const Register = () => {
  const [form, setForm] = useState(initState);
  const[data,setData]=useState([])
  const handleChange = (e) => {
    const { name, value } = e.target;
    let payload = {
      ...form,
      [name]: value
    };
    setForm(payload);
  };
  const handleRegister = () => {
    if (
      form.name !== "" &&
      form.email !== "" &&
      form.password !== "" &&
      form.mobile !== "" &&
      form.city !== "" 
    ) {
      let payload = {
        name: form.name,
        email: form.email,
        password: form.password,
        city: form.city,
        mobile: form.mobile,
      };
      setData(payload)
      setForm(initState);
    } else {
      alert("Enter all data");
    }
  };
  return  (
    <div>
      <h1>Register Page</h1>
      <div>
        Name:{" "}
        <input
          value={form.name}
          name="name"
          onChange={handleChange}
          type="text"
        />
      </div>
      <br />
      <div>
        Email:{" "}
        <input
          value={form.email}
          name="email"
          onChange={handleChange}
          type="email"
        />
      </div>
      <br />
      <div>
        Create_Password:{" "}
        <input
          value={form.password}
          name="password"
          onChange={handleChange}
          type="password"
        />
      </div>
      <br />
      <div>
        Mobile:{" "}
        <input
          value={form.mobile}
          name="mobile"
          onChange={handleChange}
          type="number"
        />
      </div>
      <br />
      <div>
        City:{" "}
        <input
          value={form.city}
          name="city"
          onChange={handleChange}
          type="text"
        />
      </div>
      <br />
      <button onClick={handleRegister}>REGISTER</button>
    </div>
  )
};