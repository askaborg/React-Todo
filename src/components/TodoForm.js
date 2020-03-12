import React from 'react'

import { Todo, TodoList } from '../components'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { chore: '' }
    }

    handleChanges = e => this.setState({ chore: e.target.value })

    handleAddChore = e => {
        e.preventDefault()
        this.props.addChore(this.state.chore)
        this.state.chore = ''
    }

    render() {
        return (
            <form onSubmit={this.handleAddChore}>
                <input type='text' placeholder='...todo' value={this.state.chore} 
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm