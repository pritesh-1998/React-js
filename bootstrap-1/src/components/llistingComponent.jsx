/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Heading from "./Heading";

// const List = (props) => {
//deserializing the direct output
const List = ({ listitems }) => {
    // let bikes = props.listitems;

    //deserializing
    // let { listitems } = props;
    const buttonClick = (item, event) => {
        console.log(event);
        // console.log(`${item} Button Clicked`)
    }
    return (
        <>
            <Heading heading={"Buy your favourite bike"} />
            <ul className="list-group">
                {listitems.map(item => (
                    <li key={item} className="list-group-item list-group-item-action">
                        {item}
                        <button className="btn  btn-outline-warning px-3 mx-3 text-black float-end" onClick={
                            (event) => { buttonClick(item, event); }}>Buy</button>
                    </li>
                ))}
            </ul >
        </>
    );
};

export default List;