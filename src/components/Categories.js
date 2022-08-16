import React from "react";
import AddCat from "./AddCat";
import Category from "./Category";

function Categories() {
    const [showCat, setShowCat] = React.useState(true);
    const [editToggle, setEditToggle] = React.useState(false);
    
    const catArr = [
        { name: "School", taskNum: 2, id: 1},
        { name: "Personal", taskNum: 1, id: 2},
        { name: "Others", taskNum: 0, id: 3}
    ]
    return (
        <div className="categories">
            <div className="cats-header">
                <button onClick={() => setShowCat(!showCat)}>
                    Categories
                </button>
            </div>

            {
                showCat &&
                <div className="cats-block">
                {
                    <div className="add-cat-container"><AddCat /></div>
                }
                {
                    catArr.length > 0 &&
                    <div className="cats">
                        <div className="cats-edit-toggle">
                            <button onClick={() => setEditToggle(!editToggle)}>EDIT</button>
                        </div>
                        {
                            catArr.map( cat => 
                                <Category 
                                    category={cat}
                                    editToggle={editToggle}
                                    key={cat.id}
                                />
                            )
                        }
                    </div>
                }
            </div>
            }           
        </div>
    )
}

export default Categories;