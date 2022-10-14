import React from 'react'
import Todo from './Todo'

const TodoList = ({todos , done , delTodo}) => {
  return (
    <div>
        {todos.map((todo)=><Todo todo={todo} done={done} key={todo.id} delTodo={delTodo} />)}
    </div>
  )
}

export default TodoList