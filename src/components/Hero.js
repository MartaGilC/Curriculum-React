
import "./Hero.css"
import PhotoProfile from "./Photo";
const Hero = (props) => {


    console.log("hero", props);
    return ( 
        <div className="hero"> 
        
        <img className="firstImg" src={props.data.image} alt="" />
        <div className="card">
         <h1 className="titleName"> {props.data.name}</h1>
         <p> 📍​ {props.data.city}</p>
         <p> 🎂​ {props.data.birthDate}</p>
         <p>  📧 {props.data.email}
         </p>

         <p>   <a href= {props.data.gitHub}>GitHub </a>
         
         </p>
        
         </div>
         
        </div>  
       
    )
};

export default Hero