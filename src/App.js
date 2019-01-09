// import 'babel-polyfill'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom'
import { selectSubreddit, fetchPosts } from './actions'
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

  render() {
    console.log("This is the process.env", process.env.PUBLIC_URL)
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
            <NavBar />
            <Route exact path={`/`} render={ (routerProps) => < Home routerProps={routerProps}  />} />
            {/* <Route  exact  path='/' component={Home} /> */}
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
// The nice thing about thunks is that they can dispatch results of each other:
store.dispatch(selectSubreddit('reactjs'))
store.dispatch(fetchPosts('reactjs')).then(() => console.log(store.getState()))

export default App;
