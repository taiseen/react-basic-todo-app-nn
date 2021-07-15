import { Component } from 'react';

class TodoAdd extends Component {

    state = {
        task: ''
    }

    handleTaskAdd = (e) => {
        this.setState({ task: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ task: '' })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Todo...</label>
                    <input type="text" onChange={this.handleTaskAdd} value={this.state.task} />
                </form>
            </div>
        );
    }
};

export default TodoAdd;