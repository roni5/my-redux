import React, { Component } from 'react';
// import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

import NavBar from './components/NavBar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import logger from 'redux-logger'
const initialState = {};
const middleware = [thunk, logger];
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

class App extends Component {
  // state = {
  //   todos: [
  //     { id: 1, content: 'buy some milk' },
  //     { id: 2, content: 'Play Mario ' }
  //     ]
  // }
// input  id  not equal to todos.id
// true to keep todo in new array , else false, let go
  // deleteTodo = (id) => {
  //   const todos = this.state.todos.filter(todo => {
  //     return todo.id !== id
  //   });
  //   // if key value have same name todos: todos
  //   this.setState({
  //     todos
  //   })
  // }
  // pass it down to AddTodo comp
  // addTodo = (todo) => {
  //   todo.id = Math.random();
  //   // let todos new array  is equal to old Array (each item) + obj todo  (arg)
  //   let todos = [...this.state.todos, todo];
  //   this.setState({
  //     todos: todos
  //   })
  // }
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
           <Route  exact  path='/' component={Home} />
           <Route  path='/contact' component={Contact} />
           <Route  path='/about' component={About} />

           {/* <h1 className="center blue-text">Todos</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} /> */}
        </div>
        </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
