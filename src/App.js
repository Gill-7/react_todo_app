import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./components/todosData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => 
            <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
        )
        
        return (
            <div class='page'>
                <div class='todo-list'>
                    <div className="todo-list-main">{todoItems}</div>
                    <div class="todo-list-leftside"></div>
                    <div class="todo-list-bottom"></div>
                </div>
                <h1 class='heading'>Todo List Task</h1>
            </div>
        )    
    }
}

export default App

