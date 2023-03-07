import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import './app.css'

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'React Application', important: true, id: 2 },
    { label: 'Make notes from your stud', important: false, id: 3 },
    { label: 'Do not drink alchohol', important: false, id: 4 },
];
    return (
        <div className="todo-app">
            
            <AppHeader  toDo={1} done = {3}/>
            <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
            </div>
            <TodoList todos={todoData}/>
        </div>
    );
}

export default App;
