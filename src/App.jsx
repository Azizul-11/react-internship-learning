// import React, { Component } from "react";
// // import ClassComponent from "./Component/ClassComponent";
// // import FunctionComponent from "./Component/FunctionComponent";
// import "./App.css";
// // import Array from "./Component/Array";
// // import FromData from "./Component/FromData";
// import Navbar from "./Component/Router/Navbar";
// import Home from "./Component/Router/Home";
// const App = () => {
//   // let cname = "Zoro";
//   // let uid = 89;
//   // let costumeColor = "Black&white";

//   return (
//     <>
//       {/* <ClassComponent />
//       <FunctionComponent name={cname} uid={uid} costumeColor={costumeColor} /> */}
//       {/* <Array /> */}
//       {/* <FromData /> */}
//       <Home />
//       {/* <Navbar /> */}
//     </>
//   );
// };

// export default App;

import React, { Component } from "react";
import Home from "./Component/Router/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Component/Router/About";
import Contact from "./Component/Router/Contact";
import Navbar from "./Component/Router/Navbar";
import Error from "./Component/Router/Error";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
