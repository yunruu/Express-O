import React, { useContext } from "react";
import WeeklyTodos from "./WeeklyTodos";
import Todo from "./Todo";
import { TodoContext } from '../context';

function TodoList() {
    const { currCat } = useContext(TodoContext);
    const todos = [
        {
            id: "1",
            task: "Class at 9pm",
            date: "15 Aug",
            time: "8pm",
            dayofweek: "1",
            completed: true,
            category: "School",
            
        },
        {
            id: "2",
            task: "Dinner plans",
            date: "13 Aug",
            time: "8pm",
            dayofweek: "6",
            completed: false,
            category: "Personal"
        },
    ]

    return (
        <div className="todo-list">
            <div className="current-category-header">
                {currCat}
            </div>
            <div className="todos">
                {
                    currCat === "Today" 
                    ?
                    <WeeklyTodos todos={todos} />
                    :
                    todos.map( todo => 
                        <Todo todo={todo} key={todo.id} />)
                }
            </div>
        </div>
    )
}

export default TodoList;