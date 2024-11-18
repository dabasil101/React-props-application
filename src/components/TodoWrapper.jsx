
import { useState } from "react";
import Form from "./Form";
import TodoComponent from "./Todo";
import { v4 as uuidv4 } from 'uuid';

const TodoWrapper = () => {
    let [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    };

    return (
        <div>
            <Form addTodo={addTodo} />
            {todos.map((todo) => (
                <TodoComponent task={todo} key={todo.id} />
            ))}
        </div>
    );
};

export default TodoWrapper;
