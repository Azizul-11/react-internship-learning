import React, { useState } from "react";

const FunctionComponent = (props) => {
  //   let name = "Peter Parker";
  const [name, setName] = useState("peter1");

  //   const [uid, setUid] = useState(48);

  return (
    <>
      <h1>FunctionComponent</h1>
      <p>Name of SpiderMan is {name}</p>
      <p>
        The Cartoon Name is {props.name} uid is {props.uid}
      </p>
      <p>The Favrouite cartoon is {props.fav || "The wix Club"}</p>
      <p>Costume Color is {props.costumeColor}</p>
      <button onClick={() => setName("Peter Parker")}>Update Name</button>
    </>
  );
};

export default FunctionComponent;
