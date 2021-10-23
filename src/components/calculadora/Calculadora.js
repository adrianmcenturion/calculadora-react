import Botones from "../botones/Botones"
// import { useState } from "react"




const Calculadora = () => {

  

    
    return (
        <div className="calculadora">
      <div className="contenedor-input">
        <input className="input" />
      </div>
      <div className="contenedor-boton-borrar">
        <Botones name="AC"/>
        </div>
        <div className="contenedor-numeros">
        <Botones name={7}/>
        <Botones name={8}/>
        <Botones name={9}/>
        <Botones name={4}/>
        <Botones name={5}/>
        <Botones name={6}/>
        <Botones name={1}/>
        <Botones name={2}/>
        <Botones name={3}/>
        <div className="boton-cero">
        <Botones name={0}/>
        </div>
        <Botones name="."/>
        </div>
      
      <div className="contenedor-operadores">
        <Botones name="/"/>
        <Botones name="X"/>
        <Botones name="-"/>
        <Botones name="+"/>
        <Botones name="="/>
      </div>
    </div>
    )
}

export default Calculadora

