import Alert from "./alert"
import SingleTodo from "./TodoSingleItem"

export default function Todo() {

    let todo = [{ id: 1, name: "Todo Task 1", date: "05/05/2024" }, { id: 2, name: "Todo Task 2", date: "05/05/2024" }, { id: 3, name: "Todo Task 3", date: "05/05/2024" }, { id: 4, name: "Todo Task 4", date: "05/05/2024" }, { id: 5, name: "Todo Task 5", date: "05/05/2024" }];
    return <>
        <Alert title={"THIS IS AN SIMPLE TO DO APP MADE USING ✅ REACT-JS"} />
        <div>
            <h1 className='text-center'>Todo List</h1>
            <div className="container text-center">
                <div className="row p-2 m-2">
                    <div className="col">
                        <input type="text" className="p-1" name="" placeholder='Enter your Task Name' id="" />
                    </div>
                    <div className="col">
                        <input type="datetime-local" className="p-1" name="" id="" />
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-success px-4">Add</button>
                    </div>
                </div>
                {todo.map((singleTodo) => (
                    <SingleTodo key={singleTodo.id} todo={singleTodo}></SingleTodo>
                ))}
            </div>
        </div>
    </>
}