import React, { createContext } from 'react';

const TodoContext = createContext();

function TodoContextProvider({children}) {
    const defaultCat = 'Today';
    const [currCat, setCurrCat] = React.useState(defaultCat);

    return (
        <TodoContext.Provider 
            value={
                {
                    currCat: currCat,
                    setCurrCat: setCurrCat
                }
            }>
            {children}
         </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext }