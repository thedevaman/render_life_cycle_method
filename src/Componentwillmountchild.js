import React from "react";

class Componentwillmountchild extends React.Component{
    componentWillUnmount(){
       console.warn("componentWillUnmount")
    }

    render()
    {
        return(
            <div>
                <h1>Child component of ComponentWillMount</h1>
            </div>
        )
    }
}

export default Componentwillmountchild