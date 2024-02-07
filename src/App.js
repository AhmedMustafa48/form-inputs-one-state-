import React, { useState } from "react";

function App() {
  /// make a from have input fields of name email pass
  // store them in one array of userInfo and all form data store in one state called info,setInfo .
  // make only one one handle change method  which uses names of filed to target their value.
  // after submit form field becomes empty

  // const [name, setName] = useState("");
  // const [pass, setPass] = useState("");
  // const [email, setEmail] = useState("");

  // Hello this is your 2ND BRANCH CODE

  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [info, setInfo] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // const nameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const passChange = (e) => {
  //   setPass(e.target.value);
  // };
  // const emailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ info });
    setInfo(initialState);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={info.name}
          placeholder="enter name"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={info.password}
          placeholder="enter Password"
          onChange={handleChange}
        />
        <input
          name="email"
          type="text"
          value={info.email}
          placeholder="enter Mail"
          onChange={handleChange}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
