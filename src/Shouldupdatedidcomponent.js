import React from "react";

class Shouldupdatedidcomponent extends React.Component
{
   constructor()
   {
    super()
    this.state={
     count:0
    }
   }
  
   shouldComponentUpdate()
   {
    console.warn('shouldComponentUpdate',this.state.count);
    //return false; // it is by default

    if(this.state.count>5&&this.state.count<10)
    {
        return true;
    }

    
   }

    render(){
        return(
            <div>
            <h1>Should Component did Mount {this.state.count}</h1>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Should Component did Mount</button>
            </div>
        )
    }
}

export default Shouldupdatedidcomponent