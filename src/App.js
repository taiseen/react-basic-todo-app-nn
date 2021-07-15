// 15-July-2021 
import { Component } from 'react';
import TodoAdd from './TodoAdd';
import TodoShow from './TodoShow';


class App extends Component {

    state = {
        todos: [
            { id: 1, task: 'Buy Milk (DEMO)' },
            { id: 2, task: 'Buy Egg (DEMO)' },
            { id: 3, task: 'Buy Tea (DEMO)' },
        ],
    }

    addTodo = task => {
        task.id = Math.random();

        const todos = [...this.state.todos, task];
        console.log(todos);

        this.setState({ todos })

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