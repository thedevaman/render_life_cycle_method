import React from "react";
class User extends React.Component{
    constructor()
    {
        super();
        this.state={
            email:"aman@gmail.com"
        }
    }
    render(){
        return(
            <div>
                <h1>This is User {this.state.email}</h1>
                <button onClick={()=>this.setState({email:"rahul@gmail.com"})}>Update Name</button> 
            </div>
        )
    }
}

export default User