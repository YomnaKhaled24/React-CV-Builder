import React from "react";


import MyButton from "../MyButton/mybutton.js";
import MyTitle from "../MyTitle/mytitle.js";



import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";


class Footer extends React.Component
{

    render (){

        return <>
        <section class="footer bg-secondary bg-opacity-50 text-white container mt-5 p-5">

        
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center">

               <div class="col-4 d-flex justify-content-center align-items-center justify-content-evenly">
               <FaGithub size={40}/>
               <FaFacebook size={40}/>
               <FaFacebookMessenger size={40}/>
               <FaGoogle size={40}/>
                
               </div>

              <div class="col-4 d-flex justify-content-center align-items-center">
                  <MyButton color="success" content="Contact Me"/>
              </div>

              <div class="col-4 d-flex justify-content-center align-items-center">

              

              <h4>Copyright &copy; 2024</h4>
        
                
               </div>

            </div>
        </div>


        
        </section>
        
        </>

    }

}

export default Footer;