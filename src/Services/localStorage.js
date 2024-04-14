
export const getTodos = () => {
    const todos = localStorage.getItem('todos');
    return todos !== null ? JSON.parse(todos) : [];
}

export const setTodosToLocalStorage = (todos) => {
    if (todos !== null) 
        localStorage.setItem('todos', JSON.stringify(todos));
}
