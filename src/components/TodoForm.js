import React from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from "@mui/material";
import Modal from "./Modal";
import { XCircleIcon } from "@heroicons/react/outline";

function TodoForm({ inputPlaceholder, input, setInput, date, setDate, time, setTime, categories, handleSubmit, setShowModal, confirmText }) {
    
    return (
        <div className="todo-form">    
            <Modal 
                setShowModal={setShowModal}
                showModal={true}>

                <div className="todo-task-container">
                    <div className="exit-modal">
                        <button onClick={() => setShowModal(false)}> 
                            <XCircleIcon className="h-6 w-6"/>
                        </button>
                    </div>
                    
                    <form className="set-task-form"
                        onSubmit={() => handleSubmit}>
                        <input
                            type="text"
                            value={input}
                            placeholder={inputPlaceholder}
                            onChange={(e) => setInput(e.target.value)}
                            autoFocus
                        />
                    </form>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <div className="date-time-pickers">
                            <div className="date-picker">
                                <div className="end-date-field"> End Date </div>
                                <DatePicker
                                    label="Date"
                                    value={date}
                                    onChange={ date => setDate(date) }
                                    
                                    renderInput={(params) => (
                                    <TextField {...params} helperText={params?.inputProps?.placeholder} />
                                    )}
                                />
                            </div>
                            <div className="time-picker">
                                <div className="end-time-field"> End Time </div>
                                <TimePicker
                                    label="Time"
                                    value={time}
                                    onChange={ time => setTime(time) }
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </div>
                        </div>
                    </LocalizationProvider>

                    <div className="task-pick-cat">
                        {/* <div className="task-categories"> 
                            <div className="task-category-active">Project1</div>
                            <div className="task-category">Project2</div>
                        </div> */}
                        <div className="task-categories">
                            {
                                categories.map(cat => 
                                    <div 
                                        className="task-category"
                                        key={cat.id}>
                                            {cat.name}
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    <div className="add-task-btn-container">
                        <button onClick={() => setShowModal(false)}>
                            { confirmText }
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default TodoForm;