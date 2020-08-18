import React, { Component } from 'react';
import TodoForm from '../Component/TodoForm';
import TodoList from '../Component/TodoList';

class Todo extends Component {
    state = {
        lists: [],
        edit: {},
        count: ""
    }
    submitHandler = (data) => {
        console.log(data);
        // let newData = this.state.lists;
        // newData.push(data);
        const tododata = [
            ...this.state.lists
        ]
        if (this.state.count !== '') {
            tododata[this.state.count] = data;
            this.setState({
                lists: tododata
            });
        }
        else {
            this.setState({
                lists: [...this.state.lists, data]
            });
        }
        // console.log(this.state)
        // if(this.state.count !==''){
        //     this.state.lists.splice(this.state.count, 1);
        // }
        // this.setState({
        //     lists: [...this.state.lists, data]
        // });
        // this.setState({
        //     lists: newData
        // });

    }
    editEntryHandler = (count) => {
        console.log(count);
        var editObject = this.state.lists[count];
        this.setState({
            edit: editObject,
            count: count
        });
    }

    deleteTodoEntryHandler = (count) => {
        console.log(count);
        let yes = window.confirm('Are you sure you want to delete?');
        if (yes) {
            this.state.lists.splice(count, 1);
            this.setState({
                lists: this.state.lists
            });
        }
        else
            return false;
    }

    render() {
        return (
            <div>
                <TodoForm submitHandler={this.submitHandler} editedValue={this.state.edit}></TodoForm>
                <TodoList details={this.state.lists} editEntry={this.editEntryHandler} deleteTodoEntry={this.deleteTodoEntryHandler}></TodoList>
            </div>
        )
    }
}

export default Todo;