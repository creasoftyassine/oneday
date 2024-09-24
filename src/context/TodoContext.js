import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        types: [],
        isDone: null,
        orderBy: 'DATE_DESC',
    });

    return (
        <TodoContext.Provider value={{ filters, setFilters }}>
            {children}
        </TodoContext.Provider>
    );
};
