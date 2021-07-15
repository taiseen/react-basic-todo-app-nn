// 15-July-2021 
import { Component } from 'react';
import TodoAdd from './TodoAdd';
import TodoShow from './TodoShow';


class App extends Component {

    state = {
        tasks: [
            { id: 1, name: 'Buy Milk' },
            { id: 2, name: 'Buy Egg' },
            { id: 3, name: 'Buy Tea' },
        ],
    }

    handleTaskAdd = task => {
        console.log(task);
    }



    render() {

        return (
            <div className="container">
                <h1 className="blue-text center">ToDo List</h1>

                <TodoShow tasks={this.state.tasks} />

                <TodoAdd handleTaskAdd={this.handleTaskAdd} />

            </div>
        );
    }
};

export default App;