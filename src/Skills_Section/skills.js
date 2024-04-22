import React from "react";
import MyTitle from "../MyTitle/mytitle.js";
import Progress from "./progress.js";



class Skills extends React.Component
{

    render (){

        return <>
        <section class="section3 container mt-5 p-5 bg-secondary bg-opacity-50">
        <div class="row mb-5 text-center"  >
            <MyTitle color="success" content="Skills"/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>

           <div class="row d-flex justify-content-center align-items-center">
            
            <div class="col-4">
                <h4>Skills</h4>

                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>PHP</li>
                    <li>REACT</li>
                    <li>LARAVEL</li>
                </ul>

            </div>

            <div class="col-6 ">
                <Progress  content="HTML" percentage="25"/>
                <Progress  content="CSS" percentage="50"/>
                <Progress  content="JS" percentage="10"/>
                <Progress  content="PHP" percentage="75"/>
                <Progress  content="REACT" percentage="50"/>
                <Progress  content="LARAVEL" percentage="90"/>





                
                
                

            </div>


           

            

           </div>

        
        </section>
        
        </>

    }

}

export default Skills;