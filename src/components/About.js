import "./About.css"

const About = ({data}) => {
console.log("Aqui es", data);

return(
    <div> 
    <div className="aboutme"> 
    <h1 className="name"> SOBRE MI </h1>
    {data.map((item) => {
      return (
       
        <div key = {JSON.stringify(item)}>
        <p> {item.info} </p>
        </div>
      )
     
    } ) }

    </div>
    </div>
)}




export default About