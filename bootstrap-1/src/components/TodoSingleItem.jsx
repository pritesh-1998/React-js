/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";

export default function SingleTodo({ todo, onclickFunction }) {
    let { id, name, date } = todo;
    return <>
        <div className="row p-2 m-2">
            <div className="col-5">
                <span>{name}</span>
            </div>
            <div className="col-4">
                <span>{date}</span>
            </div>
            <div className="col-3">
                <button type="button" onClick={() => onclickFunction(id)} id={id} className="btn btn-danger px-4"><MdDelete /></button>
            </div>
        </div>
    </>
}