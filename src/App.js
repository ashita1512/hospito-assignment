
import './App.css';
import {useEffect, useState} from 'react';

function App() {
   
  const states = [
   {id:"1", name:"Madhya Pradesh"},
   {id:"2", name:"Jharkhand"},
   {id:"3", name:"Assam"}
  ];

  const cities = [
    {id:"1", stateId:"1", name:"Indore"},
    {id:"2", stateId:"1", name:"Bhopal"},
    {id:"3", stateId:"1", name:"Gwalior"},
    {id:"4", stateId:"2", name:"Dhanbad"},
    {id:"5", stateId:"2", name:"Wasseypur"},
    {id:"6", stateId:"2", name:"Mirzapur"},
    {id:"7", stateId:"3", name:"Guwhati"},
    {id:"8", stateId:"3", name:"Jungle1"}
  ];

  const towns = [
    {id:"1", citiId:"1", name:"Mhow"},
    {id:"2", citiId:"1", name:"Dewas"},
    {id:"3", citiId:"2", name:"Manit"},
    {id:"4", citiId:"2", name:"Berasia"},
    {id:"5", citiId:"3", name:"Ajaypur"},
    {id:"6", citiId:"4", name:"IIT(ISM) Dhanbad"},
    {id:"7", citiId:"4", name:"Hirapur"},
    {id:"8", citiId:"5", name:"Sardar Khan's"},
    {id:"9", citiId:"5", name:"Faizal Khan's"},
    {id:"10", citiId:"6", name:"Kaleen bhaiya's"},
    {id:"11", citiId:"6", name:"Guddu bhaiya's"},
    {id:"12", citiId:"7", name:"Amin"},
    {id:"13", citiId:"7", name:"Jalah"},
    {id:"14", citiId:"8", name:"Tiger found at IIT Guwahati"},
    {id:"15", citiId:"8", name:"Leopard found in IIT Guwahati"}
  ]

  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [town, setTown] = useState([]);

  useEffect(() =>{
    setState(states);
  }, [])

  const handleState = (id) => {
    const dt = cities.filter(x => x.stateId === id );
    setCity(dt);
  }
 
  const handleCity = (id) => {
    const dt = towns.filter(x => x.citiId === id);
    setTown(dt);
  }

  
  return (
    <div className="App">
    <select id="ddlState" className='form-control select-class' onChange={(e) => handleState(e.target.value)}>
    <option value="0">Select state</option>
      {
        state &&
        state !== undefined ?
        state.map((ctr, index) => {
          return(
            <option key={index} value={ctr.id}>{ctr.name}</option>
          )
        })
        :"no state"
      }
      </select>

      <br></br>
      <select id="ddlCities" className='form-control select-class' >
      <option value="0">Select city</option>
      {
        city &&
        city !== undefined ?
        city.map((ctr, index) => {
          return(
            <option key={index} value={ctr.id}>{ctr.name}</option>
          )
        })
        :"no city"
      }
      </select>
      <br></br>
      <select id="ddlTowns" className='form-control select-class' >
      <option value="0">Select town</option>
      {
        town &&
        town !== undefined ?
        town.map((ctr, index) => {
          return(
            <option key={index} value={ctr.id}>{ctr.name}</option>
          )
        })
        :"no town"
      }
      </select>
    </div>  
  );
}

export default App;
