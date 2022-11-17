import "./Experience.css"
import React from 'react'
const Experience = (props) => {
console.log("Aqui está la experiencia", props)
return(
    <div className= "experiencia"> 
       

    <div className="cardExperience">  
    <h1>EXPERIENCIA</h1>
    <p>🧾{props.data.name}</p> 
    <p>{props.data.date}</p> 
    <p>{props.data.where}</p> 
    
    
    </div>
     
    
    
    
    </div>


 

)}
   
    




export default Experience