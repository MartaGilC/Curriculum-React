import { useState } from 'react'
import "./Photo.css"




const PhotoProfile = () => {


const photos = [ "/assets/nieve.jpeg", "/assets/silla.jpeg", "/assets/cat.jpeg", "/assets/campo.jpeg"]

const [photo, setPhoto] = useState(photos[0])

const changePhoto = () => {  
const positionRandom = Math.floor(Math.random() * photos.length);
setPhoto(photos[positionRandom])

if(photos[positionRandom] === photo && positionRandom){
    setPhoto(photos[positionRandom -1])
} else if (photos[positionRandom] === photo && positionRandom){
    setPhoto(photos[positionRandom +1])
} else {setPhoto(photos[positionRandom])}


} 
return (
    <div className='Photos'> 
    
    <img src={photo} alt =" "/>
    <button onClick={changePhoto}>PULSA PARA CONOCERME</button>
    
    
    </div>
)





}


export default PhotoProfile