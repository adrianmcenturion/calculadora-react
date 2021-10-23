import React from 'react'


const Botones = ({ name }) => {

    const handleClick = () => {
        
        console.log(name)
    }

    

    return (
        
        <button onClick={handleClick} className="boton-numero">{name}</button>
            
        
    )
}

export default Botones
