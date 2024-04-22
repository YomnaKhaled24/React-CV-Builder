import logo from './logo.svg';
import './App.css';
import React from 'react';
import AppClassComponent from './AppClassComponent';
import Hero from './Hero_Section/hero.js';
import About from './About_Section/about.js';
import Portfolio from './Portofolio_Section/portfolio.js';
import Skills from './Skills_Section/skills.js';
import Footer from './Footer_Section/footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

//This is class component

class App extends React.Component
{
  render (){
    return <>
    <Hero/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Footer/>
    
    
    
    </>

}

}

//This is Function Component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
         
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
