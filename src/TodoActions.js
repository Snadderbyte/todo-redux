const addTodo = todo => {
    {
        return {
            type: 'addTodo',
            payload: todo
        }
    }
};

export { addTodo };