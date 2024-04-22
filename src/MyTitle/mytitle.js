import React from "react";

class MyTitle extends React.Component
{
    constructor(props)
    {

        super();
    }

    render (){
        return <>
        <h1 className={`text-${this.props.color} fw-bolder`} > {this.props.content}</h1>
        </>

    }

}

export default MyTitle;