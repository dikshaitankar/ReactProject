import React ,{useState} from 'react';
import { Button } from 'reactstrap';

const List = (props) =>{
    const [state, setstate] = useState({
        todoCheck :'',
        disablevalue : false
    })  
    const strikeThrough = (key,event) => {
        console.log(key);
        let check = event.target.checked ? 'line-through' : '';
        setstate({
            todoCheck : check,
            disablevalue : state.disablevalue ? false : true
        });

       // props.strikeThrough(key);
    }
    const editTodoHandler = (key) => {
       props.editTodo(key);
    }
    const deleteListHandler = (key) => {
        props.deleteTodo(key);
    }

    return (
        <li key={props.index} className="todolist">
            <label style={{textDecoration:state.todoCheck}} >
                <input type="checkbox" onClick={(event) => strikeThrough(props.index,event)}/> 
                {props.detaillist.name} ({props.detaillist.description})</label> 
         <Button outline color="warning" size="sm" disabled={state.disablevalue} onClick={() => editTodoHandler(props.index)}>Edit</Button> <Button outline color="danger" disabled={state.disablevalue} size="sm" onClick={() => deleteListHandler(props.index)}>Delete</Button>
       </li>
    )
}

export default List;
