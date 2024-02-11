import {PIZZAS} from "../../consts/data.js";
import {Button} from "../Button.jsx";
import './style.css'

export const Product=()=> {
    return(
        PIZZAS.map((el, key) => <li className="pizza"  key={el.id}>
            <div>
                <p>{el.name}</p>
                <p>{el.ingredients.join(", ")}</p>
                <p>€ {el.unitPrice}</p>
                {el.soldOut ? <p>Sold Out</p> : <Button/>}
            </div>
        </li>)
    )
}