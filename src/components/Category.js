import React, { useContext } from "react";
import DeleteCat from "./DeleteCat";
import EditCatName from "./EditCatName";
import Modal from "./Modal";
import { TodoContext } from '../context';

function Category( { category, editToggle } ) {
    const [editCat, setEditCat] = React.useState(true);
    const [showModal, setShowModal] = React.useState(false);
    const { setCurrCat } = useContext(TodoContext);

    return (
        <div className="category">
            <div className="cat-name">
                { category.name }
            </div>

            <div className="cat-task-num">
                { category.taskNum }
            </div>

            {
                editToggle &&
                <div>
                    <div className="edit-cat">
                        <EditCatName 
                            showModal={showModal}
                            setShowModal={setShowModal}
                            category={category}/>
                    </div>
                    <div className="delete-cat">
                        <DeleteCat />
                    </div>
                </div>
            }
            
        </div>
    )
}

export default Category;