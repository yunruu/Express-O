import React from "react";
import Modal from "./Modal";
import ModalField from "./ModalField";

function AddCat() {
    const [showModal, setShowModal] = React.useState(false);
    const [catName, setCatName] = React.useState("");
    const handleSubmit = (e) => {

    }

    return (
        <div className="add-cat-modal-container">
            <div className="add-cat">
                <button onClick={ () => setShowModal(true)}>ADD CATEGORY</button>
            </div>
            <Modal 
                showModal={ showModal } 
                setShowModal={ setShowModal }>

                <ModalField
                    field={ catName }
                    setField={ setCatName }
                    heading={ 'New Category' }
                    handleSubmit={ handleSubmit }
                    setShowModal={ setShowModal }
                />
            </Modal>
        </div>
        
    )
}

export default AddCat;