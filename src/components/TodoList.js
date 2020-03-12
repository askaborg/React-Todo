// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import { Todo, TodoForm } from '../components'

const TodoList = props => {
    const { choreList, addChore, toggleCompleted, clearCompleted } = props
    return (
        <>
            {props.choreList.map(chore => (
                <Todo key={chore.id} chore={chore} toggleCompleted={toggleCompleted} />
            ))}
            
            <TodoForm addChore={addChore} clearCompleted={clearCompleted} />
            <button onClick={clearCompleted}>Clear Completed</button>
        </>
    )
}

export default TodoList