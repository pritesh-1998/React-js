/* eslint-disable no-unused-vars */
import { useState } from "react";
import Heading from "./Heading";

// eslint-disable-next-line react/prop-types
const List = ({ Listitems }) => {
    const [showText, setShowText] = useState("");
    const [listItems, setListItems] = useState(Listitems);
    const [bought, setBought] = useState([]);
    const addItem = (item) => {
        let newbought = item;
        let newItemsBought = [...bought, newbought];
        setBought(newItemsBought); // Update showText with the clicked item
    }
    const removeItem = (itemToRemove) => {
        setListItems(prevItems => prevItems.filter(item => item !== itemToRemove));
    }
    const addBike = () => {
        if (showText.trim() !== "") {
            setListItems(prevItems => [...prevItems, showText]);
            setShowText(""); // Clear the input after adding
        }
    }

    return (
        <>
            <Heading heading={"Buy your favourite bike"} />


            <div className="d-flex justify-content-around my-3">
                <input type="text" value={showText} onChange={e => setShowText(e.target.value)} className="form-control border border-dark w-50" placeholder="Enter your bike" />
                <button type="button" className="btn btn-secondary" onClick={addBike}>Add</button>
            </div>
            <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                    <p className="font-weight-bold">You Entered :- {showText}</p>
                </li>
            </ul>
            {listItems.length === 0 && (
                <Heading heading={"List empty"} />
            )}
            <ul className="list-group">
                {listItems.map(item => (
                    <li key={item} className={`list-group-item list-group-item-action ${bought.includes(item) && "active"}`} >
                        {item}
                        <button className="btn btn-outline-warning px-3 mx-3 text-black float-end" onClick={() => addItem(item)}>Buy</button>
                        <button className="btn btn-outline-danger px-3 mx-3 text-black float-end" onClick={() => removeItem(item)}>Delete</button>

                    </li>
                ))}
            </ul>
        </>
    );
};

export default List;
