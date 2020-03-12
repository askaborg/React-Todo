import React from 'react'

const Todo = props => {
    const { toggleCompleted } = props
    const { task, id, completed } = props.chore

    return (
        <div className={`chore${completed ? " completed" : ""}`}
            onClick={e => toggleCompleted(id)}
        >
            <p>{task}</p>
        </div>
    )
}

export default Todo