import React,{useState} from 'react'
import Todo from './Todo';

function TodoForm(props) {
    const [name, setName] = useState("")
    
  
    const handleSubmit = (e) =>{
      e.preventDefault()
      props.addTask(name) 
      setName("")
    }
  
    const handleInput = (e) =>{
      setName(e.target.value)
    }
  
  return (
    <div>
        
        <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleInput}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      </div>
  )
}

export default TodoForm