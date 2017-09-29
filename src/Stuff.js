import React, {Component} from 'react';
import './stuff.css';

class TodoList extends Component{
    render(){
        return(
            <div className="todoListMain">
                <h2>To do or not to do...</h2>
                <br/>
                <div className="todo-header">
                    <form>
                        <input placeholder="enter task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;