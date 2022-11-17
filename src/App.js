import { CV } from "./CV/CV"
import './App.css';
import Hero from "./components/Hero";
import About from "./components/About"
import { useState } from 'react'
import Menu from "./components/Menu";




const { hero } = CV;



function App() {
 
  const [showall, setShowAll] = useState(true)
  
  return (
    <div className="App">
   <Hero data = {hero} />


   <button className="firstButton" onClick={()=> setShowAll(!showall)}>{showall ? "Pulsa para ver más" : "Ocultar"}</button>
   {showall 
   ? <div> 
    
    <img
          src="https://i.gifer.com/DAf.gif"
          alt="loading"
        />
    </div>
    :  <> 
    <About data = {hero.aboutMe}/>
   <Menu/>
   </>}
 

    </div>
  


  );
  
}

export default App;
