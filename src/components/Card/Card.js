import React from 'react'

const Card = () => {
  return (
    <div>
      <div>
        <img src="https://randomuser.me/api/portraits/men/28.jpg" alt="" className="" />
      </div>

      <div>
        <h3>Cristhian</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, incidunt.</p>

        <ul>
          <li>300 <strong>Followers</strong></li>
          <li>100 <strong>Following</strong></li>
          <li>30 <strong>Repos</strong></li>
        </ul>
      </div>

      <div>
        <a href="">Repo 1</a>
        <a href=""> Repo 2</a>
        <a href="">repo 3</a>
      </div>
    </div>
  )
}

export default Card
