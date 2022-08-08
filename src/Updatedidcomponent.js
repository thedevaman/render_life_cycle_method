import React from "react";

class Updatedidcomponent extends React.Component
{
    constructor(){
        super()
        this.state={
            name:"Aman",
            count:0
        }
        // console.warn("constuctor")
    }
    componentDidUpdate(lastProps,lastState,snapshot){

        console.warn("componentDidUpdate",lastState.count,this.state.count,snapshot)

         if(this.state.count<10){
            this.setState({count:this.state.count+1})
         }

        if(lastState.count===this.state.count)
        {
            alert("data found equal")
        }
        
    }
    render(){
    // console.warn("render")
    return(
        <div>
            <h1>Component did Update {this.state.name}</h1>
            <h1>Counter {this.state.count}</h1>
            <button onClick={()=>this.setState({name:"rahul",count:1})}>update did mount</button>
        </div> 
    )
    }
}
export default Updatedidcomponent