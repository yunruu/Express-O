import React from "react";
import ModalField from "./ModalField";
import Modal from "./Modal";

function EditCatName({ category, showModal, setShowModal }) {
    const [newCatName, setNewCatName] = React.useState(category.name);

    const handleSubmit = (e) => {

    }

    return (
        <div className="edit-cat">
            <button onClick={() => setShowModal(true)}>Edit</button>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}>
                    
                <ModalField
                    field={ newCatName }
                    setField={ setNewCatName }
                    heading={ 'New Category Name' }
                    handleSubmit={ handleSubmit }
                    setShowModal={ setShowModal }
                />
            </Modal>
        </div>
    )
    

}

export default EditCatName;