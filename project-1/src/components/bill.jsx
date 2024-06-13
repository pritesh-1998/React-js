import { useContext } from "react";
import { CartContext } from "../store/cartItems";
const Bill = () => {
    const { caartitems, setitems } = useContext(CartContext);
    console.log(caartitems);
    const total = caartitems.reduce((a,b)=>{
        return a+b.price;
    },0)
    console.log(total);
    return <>
    <h1>Your Cart</h1>
        {caartitems && caartitems.map((item) => (
            <li style={{padding:"10px"}} key={item.index}>
                {item.name} <button key={item.index}>Delete item</button></li>
        ))}
        <h2 className="Bill-div">
            Total :- {total}
        </h2>
    </>
}
export default Bill;