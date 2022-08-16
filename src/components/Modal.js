import React from "react";

function Modal( { children, showModal, setShowModal }) {
    const ref = React.useRef();

    const closeModal = (e) => {
        if (ref.current === e.target) {
            setShowModal(false);
        }
    }

    if (showModal) {
        return (
            <div 
                className="modal"
                ref={ref}
                onClick={closeModal}>
                <div className="modal-container">
                    { children }
                </div>
            </div>
        )
    }
}

export default Modal;