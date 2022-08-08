import React from "react";
class User extends React.Component{
    constructor()
    {
        super();
        this.state={
            email:"aman@gmail.com",
            name:"Aman"
        }
    }
    componentDidMount()
    {
    // console.warn("componentdidmount")
    }
    render(){
        // console.warn("render")
        
        return(
            <div>
                <h1>This is User {this.state.email}</h1>
                <h1>This is User {this.state.name}</h1>
                <button onClick={()=>this.setState({email:"rahul@gmail.com",name:"rahul"})}>Update Name</button> 
            </div>
        )
    }
}

export default User