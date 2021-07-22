import React from 'react'
import classes from './Card.module.css'


const Card = () => {
  return (
    <div className={classes.card}>
      <div >
        <img className={classes.avatar} src="https://randomuser.me/api/portraits/men/28.jpg" alt="" />
      </div>

      <div className={classes.userInfo}>
        <h3>Cristhian</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, incidunt.</p>

        <ul>
          <li>300 <strong>Followers</strong></li>
          <li>100 <strong>Following</strong></li>
          <li>30 <strong>Repos</strong></li>
        </ul>

      <div>
        <a href="https://google.com" className={classes.repo}>Repo 1</a>
        <a href="https://google.com" className={classes.repo}> Repo 2</a>
        <a href="https://google.com" className={classes.repo}>Repo 3</a>
      </div>
      </div>

    </div>
  )
}

export default Card
