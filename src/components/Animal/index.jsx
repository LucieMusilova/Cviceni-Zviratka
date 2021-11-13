import React from 'react';
import './style.css';

const Animal = ({name, lat, pic, id, numb}) => {

  const handleClick = () => {
    numb(id)
  };

  return(
    <div className="zvire" onClick={handleClick}>
      <div className="zvire__foto">
        <img src={pic} alt="slon" />
      </div>
      <div className="zvire__popis">
        <div className="zvire__nazev">{name}</div>
        <div className="zvire__latinsky">{lat} </div>
      </div>
    </div>
  );
 };

export default Animal;