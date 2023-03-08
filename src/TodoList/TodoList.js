import React,{useEffect, useState} from "react";
import {Row,Col, Button, FormControl, ButtonGroup } from "react-bootstrap";
import s from './TodoList.module.css'

function TodoList ({todo, setTodo}){
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtred, setFiltred] = useState(todo);

    useEffect(()=>{
        setFiltred(todo)
    }, [todo])
    function deleteTodo(id){
        let newTodo = [...todo].filter(item =>item.id!==id)
        setTodo(newTodo);
    }
    function statusTodo(id){
        let newTodo = [...todo].filter(item =>{
            if(item.id === id){
                item.status = !item.status
            }
            return item;
        })
        setTodo(newTodo)

    }
    function editTodo(id, title){
         setEdit(id)
         setValue(title)
    }
    function saveTodo(id){
        let newTodo = [...todo].map(item =>{
            if(item.id === id) {
                item.title = value
            }
            return item;
        })
        setTodo(newTodo)
        setEdit(null)
    }

    function todoFilter(status){
        if(status ==='all'){
            setFiltred(todo)
        }
        else{
            let newTodo = [...todo].filter(item => item.status === status )
            setFiltred(newTodo)
        }
    }


    return(
        <div>
            <Row>
                <Col className = {s.filter}>
                <ButtonGroup aria-label="Basic example">
                    <Button  className={s.btns} variant="warning" onClick={()=>todoFilter('all')}>All</Button>
                    <Button  className={s.btns} variant="warning"onClick={()=>todoFilter(true)}>Open</Button>
                    <Button  className={s.btns} variant="warning"onClick={()=>todoFilter(false)}>Closed</Button>
             </ButtonGroup>
             </Col></Row>
            {
                filtred.map( item =>(
                    <div key={item.id} className = {s.asd}>
                        {
                            edit === item.id ?
                            <Row>
                                <Col className='add'>
                                    <FormControl value={value } onChange ={(e)=>setValue(e.target.value)}/></Col>
                                
                            </Row>:
                            <div className={!item.status ? s.close : ''}>{item.title}</div>
                        }
                        {
                            edit === item.id ?
                            <Row>
                              <Button variant="outline-success" className="btn" onClick={()=>saveTodo(item.id)}>Сохранить </Button>  
                              </Row>:
                              <Row>
                                <Col className="add">
                                <Button variant="outline-success" className="btn" onClick={()=> deleteTodo(item.id)}>Удалить</Button>
                                <Button variant="outline-success" className="btn" onClick={()=> editTodo(item.id, item.title)}>Редактировать</Button>
                                <Button variant="outline-success" className="btn" onClick={()=> statusTodo(item.id)}>Закрыть</Button> </Col>
                             </Row>
                        }
                        
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList;