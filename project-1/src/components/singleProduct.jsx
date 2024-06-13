import { useContext } from "react";
import { CartContext } from "../store/cartItems";

let SingleItem = ({ person, price,index }) => {
    const { caartitems, setCartItems } = useContext(CartContext);
    console.log(caartitems);
    return <>
        <div>
            <hr />
            <p>Name  :- {person.name}</p>
            <p>Price :- {price}</p>
            <button onClick={() => {
                setCartItems(
                    [...caartitems, { name: person.name, key :index,price: price }]
                )
            }
            } >Add to cart </button>
        </div>
    </>
}

export default SingleItem