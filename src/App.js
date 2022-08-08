import logo from './logo.svg';
import './App.css';
import User from './User';
import Updatedidcomponent from './Updatedidcomponent';
import React from 'react';


function App() {
  const [name,setName]=React.useState("Aman")
  return (
    <div className="App">
     
      <h1>Rendor method in React</h1>
      <User/>
      {/* <button onClick={()=>setName("Rahul")}>Update Name</button> */}
      <hr/>
      <Updatedidcomponent/>
      <hr/>

    </div>
  );
}

export default App;
