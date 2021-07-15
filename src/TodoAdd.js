import { Component } from 'react';


class TodoAdd extends Component {

    state = {
        task: ''
    }

    handleTaskAdd = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random());
        this.setState(this.state.id)
        
        console.log(this.state);

        // this.handleTaskAdd(this.state.task)
        // this.setState({ task: '' })
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="task" onChange={this.handleTaskAdd} />
                    <button>Task add</button>
                </form>
            </div>
        );
    }
};

export default TodoAdd;