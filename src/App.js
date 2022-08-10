import logo from './logo.svg';
import './App.css';
import User from './User';
import Updatedidcomponent from './Updatedidcomponent';
import React from 'react';
import Shouldupdatedidcomponent from './Shouldupdatedidcomponent';
import Componentwillmount from './Componentwillmount';

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
      <hr/>
      <Componentwillmount/>

    </div>
  );
}

export default App;
