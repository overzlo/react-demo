import React, {useState} from 'react'
import uuid from 'uuid'
import { v1 as uuidv1 } from 'uuid';


function AddTodo({todo, setTodo}){
    const [value, setValue] = useState('')
    console.log(value)

    function saveTodo(){
        setTodo(
            [...todo,{
                id: uuidv1(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }
    return(
        <div>
            <input placeholder='Enter something' value={value} onChange = {(e)=>setValue(e.target.value)}/>
            <button onClick={saveTodo}>Сохранить</button>
        </div>
    )
}
export default AddTodo;