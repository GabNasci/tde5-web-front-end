import "./Button.css"

const Button = ({texto, clicaNoBotao}) => {
    return (
        <button className="botao" onClick={clicaNoBotao}>{texto}</button>
    );
}

export default Button