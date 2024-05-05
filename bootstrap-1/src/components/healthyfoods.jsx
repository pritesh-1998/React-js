import React from "react";

export default function Healthyfood() {
    let items = [["1", "Lamborghini"], ["2", "Maruti"], ["3", "Mercedes"], ["4", "Bmw"], ["5", "Audi"]];
    let bikes = ["Raider", "Hayabusa"];

    if (bikes.length === 0) {
        return <h2>No bikes list found</h2>;
    } else {
        return (
            <React.Fragment>
                {/* ternary operator */}
                {items.length === 0 ? <h2>No cars list found</h2> : null}
                <ul className="list-group">
                    {items.map(item => {
                        return (
                            <li
                                key={item[0]}
                                // logical && operator
                                className={`list-group-item ${item[0] == 1 && "bg-warning"} text-black list-group-item-action`}
                            >
                                {item[1]}
                            </li>
                        );
                    })}
                </ul>
                <ul className="list-group">
                    {bikes.map(item => (
                        <li key={item} className="list-group-item bg-primary text-white list-group-item-action">
                            {item}
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}
