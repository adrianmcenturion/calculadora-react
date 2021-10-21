import React from 'react'


const Botones = ({handleClick, text}) => {

    const alertText = (e) => {
        console.log(e.target.textContent)
    }

    return (
        
        <button onClick={alertText} className="boton-numero">{text}</button>
            
        
    )
}

export default Botones
