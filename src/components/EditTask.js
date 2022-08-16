import { Send } from "@mui/icons-material";
import React from "react";
import TodoForm from "./TodoForm";

function EditTask({ categories }) {
    const [showModal, setShowModal] = React.useState(false);
    const [name, setName] = React.useState('');
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
        <div className="edit-task">
            {
                showModal &&
                <TodoForm
                    inputPlaceholder={"New Task Name"}
                    input={name}
                    setInput={setName}
                    time={time}
                    setTime={setTime}
                    date={date}
                    setDate={setDate}
                    handleSubmit={handleSubmit}
                    categories={catArr}
                    setShowModal={setShowModal}
                    confirmText="Confirm Edit"
                />
            }

        </div>
    )
}

export default EditTask;