import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import RemoveTodo from '../containers/RemoveTodo'

const done = 'Finished';
const Todo = ({ onClick, completed, text, id }) => (
  <li className="collection "
    onClick={onClick}



  // style={{
  //   textDecoration: completed ? 'line-through' : 'none'
  // }}
  ><i class="material-icons ">developer_board</i>
    <span className="collection-item">{text} {completed ? <i class="collection-item  material-icons"> check </i> : null}</span>
    <span class="secondary-content">
      <RemoveTodo id={id} />
    </span>

  </li>
  //   {text}
  // </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo