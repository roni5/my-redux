import React from 'react'
import {connect} from 'react-redux'
import {removeTodo} from '../actions'

let RemoveTodo = ({id, dispatch}) => {
  return (
      <div className="center">
        <a  onClick={e => {
          e.preventDefault()
           dispatch(removeTodo(id))
          console.log(dispatch(removeTodo(id)));
        }}>  Remove item  <i class="material-icons"> delete </i>  </a>
      </div>
  )
}

RemoveTodo = connect()(RemoveTodo)

export default RemoveTodo