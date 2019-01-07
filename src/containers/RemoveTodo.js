import React from 'react'
import {connect} from 'react-redux'
import {removeTodo} from '../actions'

let RemoveTodo = ({id, dispatch}) => {
  return (
      <div className="center">
        <button type="submit"  className="waves-effect waves-light btn-small red"   onClick={e => {
          e.preventDefault()
           dispatch(removeTodo(id))
          // console.log(dispatch(removeTodo(id)));
        }}>  Remove item  <i class="material-icons"> delete </i>  </button>
      </div>
  )
}

RemoveTodo = connect()(RemoveTodo)

export default RemoveTodo