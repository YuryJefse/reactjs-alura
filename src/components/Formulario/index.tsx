import React from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss";

class Formulario extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
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