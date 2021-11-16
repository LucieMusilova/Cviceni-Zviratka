import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import './style.css';
import AnimalDetail from './components/AnimalDetail/index';
import AnimalList from './components/AnimalList/index';


const App = () => {
  
    const [animal, setAnimal] = useState([]);
    const [detail, setDetail] = useState([]);
    const [zool, setZool] = useState([]);
    const [zoo, setZoo] = useState([]);

    const fetchAnimal = () => {
      fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
      .then(response => response.json())
      .then(data => {
        setAnimal(data.zvirata);
        setDetail(data.zvirata[0]);
        setZoo(data.zvirata[0].zoo);
      })
    };
    

    const fetchZoo = () => {
      fetch('https://lrolecek.github.io/zviratka-api/zoo.json')
      .then(response => response.json())
      .then(data => {
        setZool(data.zoo);
      })
    };

    useEffect(() => {
      fetchAnimal();
      fetchZoo();
    }, []);

    console.log(animal)
    console.log(zool)

  
    const getNumber = (n) => {
      setDetail(animal[n - 1]);
      setZoo(animal[n - 1].zoo);
    }


    return(
        <>
        <h1>Zvířátka v ZOO</h1>
        
        {animal && zool? 
        <div className="container">
        <AnimalList animal={animal} numb={getNumber}/>

        <AnimalDetail zool={zool} zoo={zoo} animal={detail} />
        </div> : null }
        </>
      );
  
};

render(<App />, document.querySelector('#app'));
