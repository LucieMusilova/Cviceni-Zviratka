import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import './style.css';
import AnimalDetail from './components/AnimalDetail/index';
import AnimalList from './components/AnimalList/index';


const App = () => {
  
    const [animal, setAnimal] = useState([]);
    const [detail, setDetail] = useState([]);

    const fetchAnimal = () => {
      fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
      .then(response => response.json())
      .then(data => {
        setAnimal(data.zvirata);
        setDetail(data.zvirata[0]);
      })
    };

    useEffect(() => {
      fetchAnimal();
    }, []);

    console.log(animal)

    const getNumber = (n) => {
      setDetail(animal[n - 1]);
    }
    
    
    return(
        <>
        <h1>Zvířátka v ZOO</h1>
        
        {animal ? 
        <div className="container">
        <AnimalList animal={animal} numb={getNumber}/>

        <AnimalDetail animal={detail} />
        </div> : null }
        </>
      );
  
};

render(<App />, document.querySelector('#app'));
