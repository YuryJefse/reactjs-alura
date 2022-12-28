import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label htmlFor="tarefa" >Adicione a tarefa</label>
                    <input
                        type="text"
                        name="tarefa"
                    />
                </div>
                <div>
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