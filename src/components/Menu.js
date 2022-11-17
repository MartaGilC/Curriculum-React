import "./Menu.css"
import { useState } from "react";
import { CV } from "../CV/CV";
import Education from "./Education";
import Experience from "./Experience";
import PhotoProfile from "./Photo";
const { education, experience } = CV;


const Menu = () => {


    const [showEducation, setShowEducation] = useState("Education")
    return(
    <div>

            <div className='Menu'>
          
                <button className="buttonMenu" onClick={() => setShowEducation("Education")}>
                
                    <p>Educación</p>

                </button>
                <button className="buttonMenu" onClick={() => setShowEducation("Experience")}>
                
                <p>Experiencia</p>
 
            </button>
            <button className="buttonMenu" onClick= {() => setShowEducation("About me")}> 
           <p>Más sobre mi</p> </button>
        


            
         
            </div>
            {showEducation === "Education" ? <Education data = {education}/> : showEducation === "Experience" ?<Experience data = {experience}/> : <PhotoProfile /> }
         
    
    </div>
    )

}

export default Menu