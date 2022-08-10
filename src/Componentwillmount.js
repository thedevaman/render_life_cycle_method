import React from "react";
import Componentwillmountchild from "./Componentwillmountchild";
class Componentwillmount extends React.Component{
    
    constructor()
{
    super()
    this.state={
        show:true
    }
}    
    
    render(){
    return(<div>
        <h1>Component will Mount</h1>
        {this.state.show ?<Componentwillmountchild/>:<h1>Child Component Removed</h1> }
      
        <button onClick={()=>this.setState({show:!this.state.show})} >Toggle Child Component</button>
    </div>)
    }
}

export default Componentwillmount