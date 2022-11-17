import "./Education.css"

const Education = ({data}) => {
    console.log("Aqui es educación", data);
    
    return(
        <div> 
        <div className ="title">
        <h1 className="education"> EDUCACIÓN </h1>
        {data.map((item) => {
           
          return (
            
            <div key = {JSON.stringify(item)}>
        
            <p> {item.name} </p>
            <p> {item.date} </p>
            <p> {item.where} </p>
            </div>
          )
         
        })}
        </div>
        </div>
    )}
    
    
    
    
    export default Education