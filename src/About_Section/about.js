import React from "react";


import MyButton from "../MyButton/mybutton.js";
import MyTitle from "../MyTitle/mytitle.js";


class About extends React.Component
{

    render (){

        return <>
        <section class="section2 container mt-5 p-5">

           <div class="row">

           <div class="col-3">
               
           <MyTitle color="success" content="About Me"/>

            
            </div>

            <div class="col-7">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
 
                <MyButton color="success" content="Download CV" link="https://drive.google.com/file/d/14oWJABZaDLR75VNIs41y5RGjbfTw0r_W/view?usp=sharing"/>
            
            </div>


           </div>

        
        </section>
        
        </>

    }

}

export default About;