import React from 'react';
import './style.css';

const Search = ({search, animal}) => {

  const handleSearch = (event) =>{
      let value = event.target.value;
      console.log(value)
      let result = [];
      result = animal.filter((data) => {
      return (data.nazev.toLowerCase().search(value.toLowerCase()) != -1) || (data.nazevLatinsky.toLowerCase().search(value.toLowerCase()) != -1);
      });
      console.log(result);
      search(result);
      result.length == 0 ? console.log("Takové zvířátko v seznamu není.") : console.log("Zvířátko je v seznamu.")
      
  }

  return(
      <div className="find">
        <label className="find__label"> </label>

        <input className="find__text" placeholder="Hledat zvířátko:" type="text" onChange={(event) =>handleSearch(event)}/>
        
      </div>
  )
}

export default Search;