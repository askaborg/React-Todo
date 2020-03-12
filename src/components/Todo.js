import React from 'react'

const Todo = props => {
    const {  chore, toggleCompleted } = props
    return (
        <div className={`chore${chore.completed ? " completed" : ""}`}
            onClick={e => toggleCompleted(chore.id)}
        >
            <p>{chore.name}</p>
        </div>
    )
}

export default Todo