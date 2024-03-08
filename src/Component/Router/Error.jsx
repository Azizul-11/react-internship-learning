import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Error = () => {
  useEffect(() => {
    let nav_container = document.getElementById("nav_container");
    nav_container.style.display = "none";
  });
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8NDA0fGVufDB8fDB8fHww"
        className="d-block w-100"
        alt="..."
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <button>
          <Link
            to="/"
            style={{
              color: "white",
            }}
          >
            Home
          </Link>
        </button>
      </div>
    </>
  );
};

export default Error;
