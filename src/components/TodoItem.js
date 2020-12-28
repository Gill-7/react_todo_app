import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
        {props.item.completed ?
        <div>
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p className='text'>{props.item.text}</p>
        </div>
        :
        <div>
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
        }
        </div>
    )
}

export default TodoItem