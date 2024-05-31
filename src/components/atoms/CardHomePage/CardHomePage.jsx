import React from 'react';
import "./CardHomePage.css";
// import img10 from "../../../assets/img/10.jpg"


function  CardHomePage({ e }) {
  // const { name, color, img } = e;
  // console.log(e.img);

  return (
    <div className='cardface' style={{ backgroundColor: e.color }}>
      <span className='cardContentTitle'>
        <h2>{e.name}</h2>
      </span>
      <img className='imgCard'  src={e.img} alt={`imagen de: ${e.name}`} />
      {/* <img src="" alt="" /> */}
    </div>
  );
}

export default CardHomePage;