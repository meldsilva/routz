import React, {Component} from 'react';
// import './ToDoList.css';
import ToDoItems from './ToDoItems'

class TodoList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }

    addItem(e){

        var itemArray = this.state.items;

        itemArray.push(
            {
                text: this._inputElement.value,
                key: Date.now()
            }
        );

        this.setState(
            {
                items: itemArray
            }
        );

        e.preventDefault();
    }

    render(){
        return(
            <div className="todoListMain">
                <h2>To do or not to do...</h2>
                <br/>
                <div className="todo-header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                               placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <ToDoItems entries={this.state.items}/>
            </div>
        );
    }
}

export default TodoList;