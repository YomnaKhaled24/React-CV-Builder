import React from "react";

class Box extends React.Component
{
    constructor(props)
    {

        super();
    }

    render (){
        return <>
        <div  className={` bg-${this.props.bgcolor} bg-opacity-75 col-3 d-flex justify-content-center align-items-center p-3 m-3 `}>

            <h3 className={`text-${this.props.textcolor} fw-bolder p-5`}>{this.props.content}</h3>
               
           

            
        </div>
        </>

    }

}

export default Box;