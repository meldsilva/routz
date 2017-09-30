import React, {Component} from 'react';

class ToDoItems extends Component{

    render() {
        alert("render");

        var todoEntries = this.props.entries;

        function createTasks(item) {
            alert("createTasks");
            return <li key={item.key}>{item.text}</li>
        }

        var listItems = todoEntries.map(createTasks);

        return(
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default ToDoItems;