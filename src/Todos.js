import React from 'react'

//import PropTypes from 'prop-types'

const Todos = ({ todos, deleteTodo}) => {
  const todoList = todos.length > 0 ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
        <span onClick={() => {deleteTodo(todo.id)}}>{todo.content} </span>
        </div>
      );
    })
  ) : ( <p className="center"> You have no todos left</p> )
  return (
    <div className="center todos-app container">
      <div className="todos collection">
        {todoList}
      </div>
    </div>
  )
}

// Todos.propTypes = {
//   todos.PropTypes

// }

export default Todos

