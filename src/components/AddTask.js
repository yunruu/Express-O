import React from "react";
import Modal from "./Modal";

import Categories from "./Categories";
import TodoForm from "./TodoForm";

function AddTask({categories}) {
    const [showModal, setShowModal] = React.useState(false);
    const [task, setTask] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [time, setTime] = React.useState(new Date());
    const handleSubmit = (e) => {

    }

    const catArr = [
        { name: "School", taskNum: 2, id: 1},
        { name: "Personal", taskNum: 1, id: 2},
        { name: "Others", taskNum: 0, id: 3}
    ]

    return (
        <div className="add-task">
            <div className="add-task-button">
                <button onClick={() => setShowModal(true)}>
                + New Task +
                </button>
            </div>
            
            {
                showModal &&
                <TodoForm
                    inputPlaceholder="Enter New Task"
                    input={task}
                    setInput={setTask}
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    categories={catArr}
                    handleSubmit={handleSubmit}
                    setShowModal={setShowModal}
                    confirmText="Add Task"
                />
            }
        </div>
    )
}

export default AddTask;