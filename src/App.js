import logo from './logo.svg';
import './App.css';
import User from './User';
import Updatedidcomponent from './Updatedidcomponent';
import React from 'react';
import Shouldupdatedidcomponent from './Shouldupdatedidcomponent';

function App() {
  const [name,setName]=React.useState("Aman")
  return (
    <div className="App">
     
      
      <User/>
      {/* <button onClick={()=>setName("Rahul")}>Update Name</button> */}
      <hr/>
      <Updatedidcomponent/>
      <hr/>
      <Shouldupdatedidcomponent/>

    </div>
  );
}

export default App;
