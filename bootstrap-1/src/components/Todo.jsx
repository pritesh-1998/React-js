import Alert from "./alert"
export default function Todo() {
    return <>
        <Alert/>
        <div>
            <h1 className='text-center'>Todo List</h1>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <input type="text" name="" placeholder='Enter your Task Name' id="" />
                    </div>
                    <div className="col">
                        <input type="date" name="" id="" />
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-success">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}