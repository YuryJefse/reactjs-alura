import React from "react";
import Botao from "../Botao";
import './style.scss';

class Formulario extends React.Component {
    render() {
        return (
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="tarefa" >Adicione a tarefa</label>
                    <input
                        type="text"
                        name="tarefa"
                    />
                </div>
                <div className="inputContainer">
                    <label>Tempo</label>
                    <input type="time"
                    step="1"/>
                </div>
                <Botao/>
            </form>
        );
    }
}

export default Formulario;