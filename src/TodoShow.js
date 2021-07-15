const TodoShow = ({ todos, deleteTodo }) => {

    const task = todos.length ? (
        todos.map(task => {

            const { id, name } = task;

            return (
                <div className="collection-item" key={id} >
                    <span onClick={() => deleteTodo(id)}>{name}</span>
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