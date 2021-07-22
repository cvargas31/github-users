import React from "react";
import classes from "./Card.module.css";

const Card = ({ info }) => {
  return (
    <div className={classes.card}>
      <div>
        {info.avatar_url ? (
          <img
            className={classes.avatar}
            src={info.avatar_url}
            alt={info.name}
          />
        ) : (
          <img
            className={classes.avatar}
            src="https://randomuser.me/api/portraits/men/28.jpg"
            alt=""
          />
        )}
      </div>

      <div className={classes.userInfo}>
        {info.name ? <h3>{info.name}</h3> : <h3>Cristhian</h3>}
        {info.bio ? (
          <p>{info.bio}</p>
        ) : (
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis,
            incidunt.
          </p>
        )}
        <ul>
          <li>
            {info.followers ? info.followers : "0"} <strong>Followers</strong>
          </li>
          <li>
            {info.following ? info.followers : "0"} <strong>Following</strong>
          </li>
          <li>
            {info.public_repos ? info.public_repos : "0"} <strong>Repos</strong>
          </li>
        </ul>

        <div>
          <a href="https://google.com" className={classes.repo}>
            Repo 1
          </a>
          <a href="https://google.com" className={classes.repo}>
            {" "}
            Repo 2
          </a>
          <a href="https://google.com" className={classes.repo}>
            Repo 3
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
