
import { useState } from "react";
import TodoWrapper from "./TodoWrapper";

const Form = ({ addTodo }) => {
    let [value, setValue] = useState("");

    const submite = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    };

    return (
        <div className="box">
            <h1>TO DO LIST</h1>
            <form onSubmit={submite} className="form">
                <input
                    type="text"
                    placeholder="What is the task today"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>

        </div>
    );
};

export default Form;
