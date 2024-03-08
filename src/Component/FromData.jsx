import React, { useState } from "react";

const FromData = () => {
  //   const [username, setUsername] = useState();
  //   const [email, setEmail] = useState();
  //   const [password, setPassword] = useState();
  const [formData, setFormData] = useState({
    username: " ",
    email: "",
    password: "",
  });
  const studentData = (e) => {
    e.preventDefault();
    // console.log("The UserName is ", username);
  };
  const handelData = (e) => {
    // const username = e.target.value;
    // setUsername(username);
    const { name, value } = e.target;
    console.log("details", name, "value", value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>Student Details Form</h1>
      <form onSubmit={studentData}>
        <div className="Username">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handelData}
          ></input>
        </div>
        {/* <p>{formData.username}</p> */}
        <div className="Email">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="Email"
            value={formData.email}
            onChange={handelData}
          ></input>
        </div>
        <div className="Password">
          <label htmlFor="Password">Password</label>
          <input
            type="text"
            id="password"
            name="Password"
            value={formData.password}
            onChange={handelData}
          ></input>
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default FromData;
