// Stats.jsx

import React from "react";

export const Stats = ({ filterTasks, clearCompleted }) => {
    return (
        <div className="stats">
            <button className="button-down" onClick={() => filterTasks('All')}>All</button>
            <button className="button-down" onClick={() => filterTasks('Active')}>Active</button>
            <button className="button-down" onClick={() => filterTasks('Completed')}>Completed</button>
            <button className="button-down" onClick={clearCompleted}>Clear Completed</button>
        </div>
    );
};
