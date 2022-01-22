import React, { useState } from 'react';
import "./App.css"
import CardlistActors from './components/CardlistActors';
import CardlistShows from './components/CardlistShows';



function App() {
  const [search,setSearch]=useState("");
  const [Shows,setShows]=useState([]);
  const [Actors,setActors]=useState([]);
  const [value,setValue]=useState("");

  const onchangehandler=(e)=>{
    setSearch(e.target.value);
    
  }
  const changeValue=(type)=>{
    setValue(type);
  }
  

  const onclickHandler= async()=>{
   
    if(value==="shows"){
      const Data=await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
      const fetchedData=await Data.json();
      setShows(fetchedData);
      console.log("from shows");
      console.log(fetchedData);
      
    }
    else{
      if (value==="actors") {
          const Data=await fetch(`https://api.tvmaze.com/search/people?q=${search}`);
      
        const fetchedData= await Data.json();
        setActors(fetchedData);
        console.log("from persons");
        console.log(fetchedData);
      }
      else{
        alert("please select Actor or Shows")
      }
      
      
     
    }
    
   

  }
  return (
    <div className='App'>
      <div className='container'>
        <h1>Tv Mazee</h1>
        <input type="radio" name='search' className='radio'  onClick={()=>changeValue("actors")}/><span>actor</span>
        <input type="radio" name='search' className='radio' onClick={()=>changeValue("shows")}  /><span>Shows</span>
        <br></br>
        <input type="text" value={search} onChange={onchangehandler}/>
        <button onClick={onclickHandler}>search</button>
        
        {/* <Cardlist shows={Shows} value={value} /> */}
        {/* <Cardlist /> */}
        {value==="shows"?<CardlistShows shows={Shows}/>:<CardlistActors person={Actors}/>}
        
        

      </div>
     
      
    </div>
  );
}

export default App;