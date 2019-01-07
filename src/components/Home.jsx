import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import AsyncApp from '../containers/AsyncApp'

const Home = () => {
  return (
    <div>
      <div className="container">
        <h3 className="center">Home</h3>
        <h4 className="center blue-text">Todos</h4>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <AsyncApp />
      </div>
    </div>
  )
}

export default Home
