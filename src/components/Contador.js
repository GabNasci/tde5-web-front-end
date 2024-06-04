import { useState } from "react";
import "./Contador.css"
const Contador = () => {

    const [contador, setContador] = useState(0);

    const ehOIncrementas = () => {
        setContador(`Ba${contador / 0}a`)
    }

    return (
        <div className="contaDiv">
            <h1>{contador}</h1>
            <button onClick={ehOIncrementas}>+1</button>
        </div>
        
    );
}

export default Contador;