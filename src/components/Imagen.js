
const Imagen = ({src, alt}) => {
    return (
       
        <div>
        <button onClick= {Imagen}>PULSA PARA CONOCERME</button>
         <img className='muchasImagenes'src={src} alt={alt}/>
       
    <p>hola</p>
    </div>
    )
}



export default Imagen