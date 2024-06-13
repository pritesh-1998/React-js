import { useContext } from "react";
import { CartContext } from "../store/cartItems";

const Bill = () => {
    const { caartitems, setCartItems } = useContext(CartContext);
    console.log(caartitems);

    const total = caartitems.reduce((a, b) => {
        return a + b.price;
    }, 0);

    const handleRemoveItem = (itemIndex) => {
        setCartItems(caartitems.filter((_, index) => index !== itemIndex));
    };

    return (
        <>
            <h1>Your Cart</h1>
            <ul>
                {caartitems && caartitems.map((item, index) => (
                    <li style={{ padding: "10px" }} key={index}>
                        {item.name} 
                        <button onClick={() => handleRemoveItem(index)}>Delete item</button>
                    </li>
                ))}
            </ul>
            <h2 className="Bill-div">
                Total: {total}
            </h2>
        </>
    );
};

export default Bill;
