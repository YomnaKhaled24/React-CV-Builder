import React from "react";
import './hero.css';
import background from './person.png';
import MyButton from "../MyButton/mybutton.js";
import MyTitle from "../MyTitle/mytitle.js";


class Hero extends React.Component
{

    render (){

        return <>
        <section class="section1 container position-relative ">

           <div class="container"><img src={background}  width="100%" height= "400" alt="" class=" "/></div>

        
           <div class="image_words position-absolute top-0 start-1 container  mt-5 p-5 ">
            <MyTitle color="success-emphasis" content="Kevin James"/>
            <br></br>
            
            <p>Assistant cv to the available jobs and available companies.<pre><p>Assistant cv to the available jobs and available companies.</p></pre></p>
            
            
            <MyButton color="success" content="Contact Me"/>

          </div>
        </section>
        
        </>

    }

}

export default Hero;