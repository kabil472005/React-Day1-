import React from "react";
class ToggeleMessage extends React.Component
{
    constructor()
    {
        super();
        this.setState={
            isVisible:true
        }
    }
    toggeleMessage  = () =>{
        this.setState(prevState=>({
            message : prevState.message === true ? false : true
        }));
    }
    render()
    {
        return(
            <div>
                <button onClick={this.toggeleMessage}>{this.state.isVisible===true ? 'Hide Component' : 'Show Component'}</button>
                {this.state.isVisible && <p>Hi, How are you!!!</p>}
            </div>
        )
    }
}
export default ToggeleMessage;
