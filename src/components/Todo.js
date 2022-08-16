import React from "react";
import { TrashIcon, ClipboardCheckIcon, } from '@heroicons/react/solid';
import { ClockIcon, CheckCircleIcon, ClipboardIcon, PencilIcon } from '@heroicons/react/outline';
import { Check } from "@mui/icons-material";
import EditTask from "./EditTask";

function Todo({todo}) {
    const [hover, setHover] = React.useState(false);

    return (
        <div className="todo">
            <div className="todo-container"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                                
                <div className="todo-task">
                    <div style={{color : todo.completed ? '#c0c0c0' : '#150a38'}}>{todo.task}</div>
                    <div className="date-time">{todo.date} - {todo.time}</div>
                    <div className={`line ${todo.completed ? 'line-through' : ''}`}></div>
                </div>
                <span 
                    className="delete"
                    style={{color : todo.completed ? '#c0c0c0' : '#150a38'}}>
                    {
                         (todo.completed || hover) &&
                            <TrashIcon className="h-5 w-5"/>
                    }
                </span>
                <span 
                    className="snooze"
                    style={{color : todo.completed ? '#c0c0c0' : '#150a38'}}>
                    {
                        !todo.completed &&
                        <ClockIcon className="h-5 w-5"/>
                    }
                </span>
                <span
                    onClick={() => <></>}
                    className="edit"
                    style={{color : todo.completed ? '#c0c0c0' : '#150a38'}}>
                        <PencilIcon className="h-5 w-5" />
                </span>
                <span 
                    className="todo-completed"
                    style={{color : todo.completed ? '#c0c0c0' : '#150a38'}}>
                    {
                        todo.completed
                        ?
                            <ClipboardCheckIcon className="h-5 w-5"/>
                        :
                            <ClipboardIcon className="h-5 w-5"/>
                    }
                </span>
            </div>
        </div>
    )
}

export default Todo;