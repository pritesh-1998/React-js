/* eslint-disable no-unused-vars */
import { useContext, useReducer, useRef, useState } from "react";
import Alert from "./alert"
import Swal from 'sweetalert2'
import SingleTodo from "./TodoSingleItem"
import { IoIosAddCircle } from "react-icons/io";
import withReactContent from 'sweetalert2-react-content'
import { TodoItemsContext } from "../store/item-store";
const MySwal = withReactContent(Swal)

// Try me!
function todoitemsReducer(action){
    return [];
}
export default function Todo({}) {
    const { todo, setTodoList,addTask ,deleteTodo} = useContext(TodoItemsContext);
    let [todoName, setTodoName] = useState("");
    let [todoDate, setTodoDate] = useState("");
    let todaElementName = useRef();
    let todaElementDate = useRef();
    const addTaskUsingRef = () => {
        const taskName = todaElementName.current.value;
        const taskDate = todaElementDate.current.value;
        addTask(taskName, taskDate);
    };
    let addTaskUsingForm = (event) => {
        event.preventDefault();
        let taskName=event.target[0].value;
        let taskDate=event.target[1].value;
        if (taskName != "" || taskDate != "") {
            let count = todo.length;
            let newTodoItem = [...todo, { id: count + 1, name: taskName, date: taskDate }];
            setTodoList(newTodoItem);
            Swal.fire({
                title: "Good job!",
                text: "You created a new Task!",
                icon: "success"
            });
        }
    }
    const [newTodoItems,dispatchTodoItems]=useReducer(todoitemsReducer,[]);
    return (
        <>
            <Alert title={"THIS IS A SIMPLE TO DO APP MADE USING ✅ REACT-JS"} />
            <div>
                <h1 className='text-center'>Todo List</h1>
                <div className="container text-center">
                    <div className="row p-2 m-2">
                        <div className="col-5">
                            <input type="text" className="p-1" ref={todaElementName} name="taskName" placeholder='Enter your Task Name' />
                        </div>
                        <div className="col-4">
                            <input type="date" ref={todaElementDate} className="p-1" name="taskDate" />
                        </div>
                        <div className="col-3">
                            <button type="button" onClick={addTaskUsingRef} className="btn btn-success px-4">
                                <IoIosAddCircle />
                            </button>
                        </div>
                    </div>
                    {todo.map((singleTodo) => (
                        <SingleTodo key={singleTodo.id} onclickFunction={deleteTodo} todo={singleTodo} />
                    ))}
                </div>
            </div>
        </>
    );
    //return <>
    //     <Alert title={"THIS IS AN SIMPLE TO DO APP MADE USING ✅ REACT-JS"} />
    //     <div>
    //         <h1 className='text-center'>Todo List</h1>
    //         <div className="container text-center">
    //             <div className="row p-2 m-2">
    //                 <div className="col-5">
    //                     <input type="text" className="p-1" ref={todaElementName} name="taskName" placeholder='Enter your Task Name' id="" />
    //                 </div>
    //                 <div className="col-4">
    //                     <input type="date" ref={todaElementDate} className="p-1" name="taskDate" id="" />
    //                 </div>
    //                 <div className="col-3">
    //                     <button type="button" onClick={addTaskUsingRef} className="btn btn-success px-4">
    //                         <IoIosAddCircle /></button>
    //                 </div>
    //             </div>
    //             {todo.map((singleTodo) => (
    //                 <SingleTodo key={singleTodo.id} onclickFunction={deleteTodo} todo={singleTodo}></SingleTodo>
    //             ))}
    //         </div>
    //     </div>
    // </>
    // return <>
    //     <Alert title={"THIS IS AN SIMPLE TO DO APP MADE USING ✅ REACT-JS"} />
    //     <div>
    //         <h1 className='text-center'>Todo List</h1>
    //         <div className="container text-center">
    //             <form className="row p-2 m-2" onSubmit={addTaskUsingForm}>
    //                 <div className="col-5">
    //                     <input type="text" className="p-1" onChange={(e) => setTodoName(e.target.value)} value={todoName} name="taskName" placeholder='Enter your Task Name' id="" />
    //                 </div>
    //                 <div className="col-4">
    //                     <input type="date" onChange={(e) => setTodoDate(e.target.value)} value={todoDate} className="p-1" name="taskDate" id="" />
    //                 </div>
    //                 <div className="col-3">
    //                     <button type="submit"  className="btn btn-success px-4">
    //                         <IoIosAddCircle /></button>
    //                 </div>
    //             </form>
    //             {todo.map((singleTodo) => (
    //                 <SingleTodo key={singleTodo.id} onclickFunction={deleteTodo} todo={singleTodo}></SingleTodo>
    //             ))}
    //         </div>
    //     </div>
    // </>
}