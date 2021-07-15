const TodoShow = ({ todos, deleteTodo }) => {

    const task = todos.length ? (
        todos.map(job => {

            const { id, task } = job;

            return (
                <div className="collection-item" key={id} onClick={() => deleteTodo(id)}>
                    <span >{task}</span>
                </div>
            )
        })
    ) : (
        <p className="center red-text">You have no task</p>
    )


    return (
        <div className="todos collection">
            {task}
        </div>
    );
};

export default TodoShow;