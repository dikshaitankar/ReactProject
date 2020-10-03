import React from 'react';
import List from './List';
const TodoList = (props) => {
      
    const deleteTodoHandler = (key) => {  
        props.deleteTodoEntry(key);
    } 
    
    const editTodoHandler = (key) =>{
        console.log("Edit",key);     
        props.editEntry(key);
    }
    
    return (
        <div>
            <hr/>
            <ul>
                {props.details.map((data, i) =>
                    <List key={i} index={i} detaillist={data} editTodo={(count) => editTodoHandler(count)} deleteTodo={(count) => deleteTodoHandler(count)}></List>
                )}

            </ul>
        </div>
    )
}

export default TodoList;