import React from "react";
import Box from "./box.js";
import MyTitle from "../MyTitle/mytitle.js";



class Portfolio extends React.Component
{

    render (){

        return <>
        <section class="section4 container mt-5 p-5 ">
            <div class="row mb-5 text-center">
            <MyTitle color="success" content="Portofolio"/>
            </div>

           <div class="row d-flex flex-wrap justify-content-center align-items-center ">

            <Box textcolor="light" content="HTML" bgcolor="success"/>
            <Box textcolor="light" content="CSS" bgcolor="secondary"/>
            <Box textcolor="light" content="JS" bgcolor="success"/>
            <Box textcolor="light" content="PHP" bgcolor="secondary"/>
            <Box textcolor="light" content="REACT" bgcolor="success"/>
            <Box textcolor="light" content="LARAVEL" bgcolor="secondary"/>

           

            

           </div>

        
        </section>
        
        </>

    }

}

export default Portfolio;