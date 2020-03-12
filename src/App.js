import React from 'react'

import { TodoList } from './components'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = { choreList:[] }
  }

  addChore = choreName => {
    const { choreList } = this.state

    this.setState({ choreList: [...choreList, {
          task: choreName,
          id: Date.now(),
          completed: false
        }]
    })
  }

  toggleCompleted = id => {
    const { choreList } = this.state

    this.setState({ choreList: [...choreList.map(chore => {
          if (chore.id === id) {
            return { ...chore, completed: !chore.completed }
          }
          return chore
        })]
    })
  }

  clearCompleted = () => {
    const { choreList } = this.state

    this.setState({ choreList: choreList.filter(chore => !chore.completed) })
  }

  render() {
    const { choreList } = this.state
    const { addChore, toggleCompleted, clearCompleted } = this

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          choreList={choreList}
          addChore={addChore}
          toggleCompleted={toggleCompleted}
          clearCompleted={clearCompleted} 
        />
      </div>
    )
  }
}

export default App
