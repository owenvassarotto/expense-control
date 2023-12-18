import { useState } from "react";
import Message from "./Message";

const NewBudget = ({budget, setBudget}) => {

    const [message, setMessage] = useState("");

    const handleBudget = e => {
        e.preventDefault();

        // validate the value of the input field
        if(!Number(budget) || Number(budget) < 0){
            setMessage("That is not a valid budget");
        }else{
            setMessage("The budget is correctly")
        }
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form 
            className="formulario"
            onSubmit={handleBudget}
        >
            <div className="campo">
                <label>Define New Budget</label>
                <input 
                    type="text" 
                    className="nuevo-presupuesto"
                    placeholder="Add your budget"
                    value={budget}
                    onChange={e => setBudget(e.target.value)}
                />
            </div>

            <input type="submit" value="Add" />

            {message && <Message type="error">{message}</Message>}
        </form>
    </div>
  )
}

export default NewBudget