import React from "react";

class Progress extends React.Component
{
    constructor(props)
    {

        super();
    }

    render (){
        return <>
        <div  className="">

              <div><h5> {this.props.content} </h5></div>
               <div className="progress " role="progressbar" aria-label="Success example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-success"  style={{width: `${this.props.percentage}%`}}></div>
               </div>
            
        </div>
        </>

    }

}

export default Progress;