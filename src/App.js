
import './App.css';
import Botones from './components/botones/Botones';
import './components/botones/Botones.css';

function App() {
  return (

    <div className="calculadora">
      <div className="contenedor-input">
        <input className="input" />
      </div>
      <div className="contenedor-boton-borrar">
        <Botones text="AC"/>
        </div>
        <div className="contenedor-numeros">
        <Botones text="7"/>
        <Botones text="8"/>
        <Botones text="9"/>
        <Botones text="4"/>
        <Botones text="5"/>
        <Botones text="6"/>
        <Botones text="1"/>
        <Botones text="2"/>
        <Botones text="3"/>
        <div className="boton-cero">
        <Botones text="0"/>
        </div>
        <Botones text="."/>
        </div>
      
      <div className="contenedor-operadores">
        <Botones text="/"/>
        <Botones text="X"/>
        <Botones text="-"/>
        <Botones text="+"/>
        <Botones text="="/>
      </div>
    </div>

  );
}

export default App;
