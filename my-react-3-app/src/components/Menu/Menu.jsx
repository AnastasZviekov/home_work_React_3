import {PIZZAS} from "../../consts/data.js";
import {Button} from "../Button.jsx";

const Menu = () => {
    return (
        <menu>
            {PIZZAS.map((el, key) => <li key={el.id}>
                <div>
                    <p>{el.name}</p>
                    <p>{el.ingredients.join(", ")}</p>
                    <p>€ {el.unitPrice}</p>
                    {el.soldOut ? <p>Sold Out</p> : <Button/>}
                </div>
            </li>)}
        </menu>
    )
}

export default Menu;