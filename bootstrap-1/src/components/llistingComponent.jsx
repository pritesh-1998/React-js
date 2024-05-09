import { useState } from "react";
import Heading from "./Heading";

const List = ({ listitems }) => {
    let [showText, setTextState] = useState("None Selected");

    const buttonClick = (item) => {
        setTextState(item); // Update showText with the clicked item
    }

    return (
        <>
            <Heading heading={"Buy your favourite bike"} />
            <div className="d-flex justify-content-center my-3">
                <input type="text" className="form-control w-50" placeholder="Enter your bike" />
            </div>
            <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                    <p className="font-weight-bold">You Entered :- {showText}</p>
                </li>
            </ul>
            <ul className="list-group">
                {listitems.map(item => (
                    <li key={item} className="list-group-item list-group-item-action">
                        {item}
                        <button className="btn  btn-outline-warning px-3 mx-3 text-black float-end" onClick={() => buttonClick(item)}>Buy</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default List;
