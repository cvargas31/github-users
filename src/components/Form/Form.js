import React from 'react'
import classes from './Form.module.css'


const Form = () => {
  return (
    <div className={classes.userContainer}>
      <h2>Enter Github Username</h2>
      <form className="user-form" id="form">
        <input type="text" id="search" placeholder="Enter Github Username" className={classes.input}/>
      </form>
    </div>
  )
}

export default Form
