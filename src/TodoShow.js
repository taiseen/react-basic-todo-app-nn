
const TodoShow = ({ tasks }) => {

    const task = tasks.length ? (
        tasks.map(task => {

            const { id, name } = task;

            return (
                <div className="collection-item" key={id}>
                    <span>{name}</span>
                </div>
            )
        })
    ) : (
        <p className="center red-text">You have no task</p>
    )

    return (
        <div className="collection">
            {task}
        </div>
    );
};

export default TodoShow;