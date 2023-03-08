import React, {useState} from 'react'
import { v1 as uuidv1 } from 'uuid';
import {Row, Col, Button, FormControl} from 'react-bootstrap'
import './AddTodo.css'


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
        <Row>
            <Col className='add'>
            <FormControl placeholder='Enter something' value={value} onChange = {(e)=>setValue(e.target.value)}/>
            <Button onClick={saveTodo} className = 'btn' variant = "danger">Сохранить</Button>
            </Col>
        </Row>
    )
}
export default AddTodo;