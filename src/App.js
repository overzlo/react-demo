import React, {useState} from "react";
import Header from "./Header/Header";
import AddTodo from "./AddTodo/AddTodo";
import TodoList from "./TodoList/TodoList";
function App(){
    const [todo, setTodo] = useState([{
        id: 1,
        title: 'first todo',
        status: true
    },
    {
        id: 2,
        title: 'second todo',
        status: true
    },
    {
        id: 3,
        title: 'third todo',
        status: false
    }]) 

    console.log(todo)
    return (
        <div>
            <Header/>
            <AddTodo todo = {todo} setTodo = {setTodo}/>
            <TodoList todo = {todo} setTodo = {setTodo}/>
        </div>
    )
}
export default App;