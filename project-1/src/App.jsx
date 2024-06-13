import Likebuton from "./likebutton";
import SingleItem from "./components/singleProduct";
import './App.css'
import Hello from "./hello";
import Random from "./random";
import Bill from "./components/bill";
import {CartProvider} from "./store/cartItems";
function App() {
    return <div>
        <CartProvider>
            <h1> Products </h1>
            <SingleItem person={{ name: 'Laptop' }} index={1} price={10000} ></SingleItem>
            <SingleItem person={{ name: 'Mobile' }} index={2} price={15000} ></SingleItem>
            <SingleItem person={{ name: 'Printer' }} index={3} price={20000} ></SingleItem>
            <Bill></Bill>
        </CartProvider>
    </div>

}
export default App;