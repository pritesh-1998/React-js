/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import Alert from "./alert"
import SingleTodo from "./TodoSingleItem"
import { IoIosAddCircle } from "react-icons/io";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

// Try me!

export default function Todo() {
    let initialtodo = [{ id: 1, name: "Todo Task 1", date: "05/05/2024" }, { id: 2, name: "Todo Task 2", date: "05/05/2024" }, { id: 3, name: "Todo Task 3", date: "05/05/2024" }, { id: 4, name: "Todo Task 4", date: "05/05/2024" }, { id: 5, name: "Todo Task 5", date: "05/05/2024" }];
    let [todo, setTodoList]     = useState(initialtodo);
    let [todoName, setTodoName] = useState("");
    let [todoDate, setTodoDate] = useState("");
    let todaElementName = useRef();
    let todaElementDate = useRef();
    
    let noOfUpdates = useRef(0);

    const addTask = (taskName, taskDate) => {
        if (taskName != "" || taskDate != "") {
            let count = todo.length;
            let newTodoItem = [...todo, { id: count + 1, name: taskName, date: taskDate }];
            setTodoList(newTodoItem);
            Swal.fire({
                title: "Good job!",
                text: "You created a new Task!",
                icon: "success"
            });
            noOfUpdates.current+=1;
            console.log(noOfUpdates);
        }
    }
    let addTaskUsingRef=() =>{
        let taskName = todaElementName.current.value;
        let taskDate = todaElementDate.current.value;
        if (taskName != "" || taskDate != "") {
            let count = todo.length;
            let newTodoItem = [...todo, { id: count + 1, name: taskName, date: taskDate }];
            setTodoList(newTodoItem);
            Swal.fire({
                title: "Good job!",
                text: "You created a new Task!",
                icon: "success"
            });
            noOfUpdates.current+=1;
            console.log(noOfUpdates);
        }
    }
    let deleteTodo = (id) => {
        MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const newData = todo.filter(value => { return value.id !== id });
                setTodoList(newData);
                MySwal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
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
    return <>
        <Alert title={"THIS IS AN SIMPLE TO DO APP MADE USING ✅ REACT-JS"} />
        <div>
            <h1 className='text-center'>Todo List</h1>
            <div className="container text-center">
                <div className="row p-2 m-2">
                    <div className="col-5">
                        <input type="text" className="p-1" ref={todaElementName} name="taskName" placeholder='Enter your Task Name' id="" />
                    </div>
                    <div className="col-4">
                        <input type="date" ref={todaElementDate} className="p-1" name="taskDate" id="" />
                    </div>
                    <div className="col-3">
                        <button type="button" onClick={addTaskUsingRef} className="btn btn-success px-4">
                            <IoIosAddCircle /></button>
                    </div>
                </div>
                {todo.map((singleTodo) => (
                    <SingleTodo key={singleTodo.id} onclickFunction={deleteTodo} todo={singleTodo}></SingleTodo>
                ))}
            </div>
        </div>
    </>
    // return <>
    //     <Alert title={"THIS IS AN SIMPLE TO DO APP MADE USING ✅ REACT-JS"} />
    //     <div>
    //         <h1 className='text-center'>Todo List</h1>
    //         <div className="container text-center">
    //             <div className="row p-2 m-2">
    //                 <div className="col-5">
    //                     <input type="text" className="p-1" onChange={(e) => setTodoName(e.target.value)} value={todoName} name="taskName" placeholder='Enter your Task Name' id="" />
    //                 </div>
    //                 <div className="col-4">
    //                     <input type="date" onChange={(e) => setTodoDate(e.target.value)} value={todoDate} className="p-1" name="taskDate" id="" />
    //                 </div>
    //                 <div className="col-3">
    //                     <button type="button" onClick={() => addTask(todoName, todoDate)} className="btn btn-success px-4">
    //                         <IoIosAddCircle /></button>
    //                 </div>
    //             </div>
    //             {todo.map((singleTodo) => (
    //                 <SingleTodo key={singleTodo.id} onclickFunction={deleteTodo} todo={singleTodo}></SingleTodo>
    //             ))}
    //         </div>
    //     </div>
    // </>
    //  return <>
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