import React, { useState } from "react";
import classes from "./Form.module.css";
import axios from "axios";

const Form = (props) => {
  const baseUrl = "https://api.github.com/users/"
  const [enteredUsername, setEnteredUsername] = useState("");

  const userChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };


  async function getUser(enteredUsername){
    try {
      const {data} = await axios(baseUrl + enteredUsername)
      console.log(data)
    } catch(err){
      console.log(err)
    }
  }
  


  const submitHandler = (e) => {
    e.preventDefault();
    const user = enteredUsername

    if(user) {
      getUser(user)
    }
    setEnteredUsername('');
  };


  return (
    <div className={classes.userContainer}>
      <h2>Enter Github Username</h2>
      <form className="user-form" id="form" onSubmit={submitHandler}>
        <input
          type="text"
          id="search"
          placeholder="Enter Github Username"
          className={classes.input}
          onChange={userChangeHandler}
          value={enteredUsername}
        />
      </form>
    </div>
  );
};

export default Form;
