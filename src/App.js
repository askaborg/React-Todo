import React from 'react'

import { TodoList, TodoForm } from './components'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      choreList: []
    }
  }

  addChore = choreName => {
    this.setState({
      choreList: [
        ...this.state.choreList,
        {
          name: choreName,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  toggleCompleted = id => {
    this.setState({
      choreList: [
        ...this.state.choreList.map(chore => {
          if (chore.id === id) {
            return {
              ...chore,
              completed: !chore.completed
            }
          }
          return chore
        })
      ]
    })
  }

  clearCompleted = () => this.setState({
    choreList: this.state.choreList.filter(chore => !chore.completed)
  })

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          choreList={this.state.choreList}
          addChore={this.addChore}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted} 
        />
      </div>
    )
  }
}


export default App;
