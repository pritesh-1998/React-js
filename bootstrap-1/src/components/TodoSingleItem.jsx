/* eslint-disable react/prop-types */
export default function SingleTodo({ todo }) {
    let { id, name, date } = todo;
    return <>
        <div className="row p-2 m-2">
            <div className="col">
                <span>{name}</span>
            </div>
            <div className="col">
                <span>{date}</span>
            </div>
            <div className="col">
                <button type="button" id={id} className="btn btn-danger px-4">Delete</button>
            </div>
        </div>
    </>
}