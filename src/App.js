// 15-July-2021 
import { Component } from 'react';
import TodoAdd from './TodoAdd';
import TodoShow from './TodoShow';


class App extends Component {

    state = {
        todos: [
            { id: 1, name: 'Buy Milk' },
            { id: 2, name: 'Buy Egg' },
            { id: 3, name: 'Buy Tea' },
        ],
    }

    addTodo = task => {
        task.id = Math.floor(Math.random() * 100);

        console.log(task);
    }

    deleteTodo = id => {
        const remainTodos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({ todos: remainTodos });
    }


    render() {

        return (
            <div className="todo-app container">
                <h1 className="center blue-text">ToDo List</h1>

                <TodoShow todos={this.state.todos} deleteTodo={this.deleteTodo} />

                <TodoAdd addTodo={this.addTodo} />

            </div>
        );
    }
};

export default App;