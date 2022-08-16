import React from "react";

function ModalField( {field, setField, handleSubmit, heading, setShowModal }) {
    
    return (
        <form onSubmit={ handleSubmit } className="modal-field">
            <button 
                className="modal-close-field-btn" 
                onClick={ () => setShowModal(false) }>
                    Cancel
            </button>
            <div className="modal-field-heading"> { heading } </div>
            <input 
                type="text"
                value={ field }
                placeholder="Enter Name."
                onChange={ e => setField(e.target.value) }
                autoFocus
            />
            <button 
                className="modal-confirm-field-btn" 
                onClick={ () => setShowModal(false) }>
                    Confirm
            </button>
        </form>
    )
}

export default ModalField;