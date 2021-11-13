import React from 'react';
import './style.css';
import Animal from '../Animal/index';


const AnimalList = ({animal, numb}) => {

    return(
        <div className="zvirata">

          {animal.map((an) => <Animal numb={numb} key={an.id} id={an.id} name={an.nazev} lat={an.nazevLatinsky} pic={an.foto}/>)}


        </div>
    )
  }

export default AnimalList;