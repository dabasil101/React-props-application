const Todo = ({task}) => {
    return ( 

        <div className="todo-box">
            <div className="todo">
                <p> {task.task}</p>

            </div>
            <button>Complited</button>
            <button>Trash</button>
        </div>

    );
}
export default Todo;