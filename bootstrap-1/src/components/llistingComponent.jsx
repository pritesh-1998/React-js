/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// const List = (props) => {
//deserializing the direct output
const List = ({ listitems }) => {
    // let bikes = props.listitems;

    //deserializing
    // let { listitems } = props;

    return (
        <ul className="list-group">
            {listitems.map(item => (
                <li key={item} className="list-group-item bg-primary text-white list-group-item-action">
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default List;