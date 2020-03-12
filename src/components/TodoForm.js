import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { chore:'' }
    }

    handleChanges = e => this.setState({ chore: e.target.value })

    handleAddChore = e => {
        const { addChore } = this.props
        const { chore } = this.state

        e.preventDefault()
        addChore(chore)
        this.setState({ chore:'' })
    }
    
    render() {
        const { handleAddChore, handleChanges } = this
        const { chore } = this.state
        const { clearCompleted } = this.props

        return (
            <form onSubmit={handleAddChore}>
                <input type='text' placeholder='...todo' value={chore} 
                    onChange={handleChanges}
                />
                <button>Add Todo</button>
                <button onClick={clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm