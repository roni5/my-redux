import {
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions'

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}
// is equivalent to this:
// let nextState = {}
// nextState[action.subreddit] = posts(state[action.subreddit], action)
// return Object.assign({}, state, nextState)

export default postsBySubreddit

// We extracted posts(state, action) that manages the state of a specific post list.
// This is just reducer composition! It is our choice how to split the reducer into smaller reducers, and in this case,
// we're delegating updating items inside an object to a posts reducer. The real world example goes even further,
// showing how to create a reducer factory for parameterized pagination reducers.

// Remember that reducers are just functions, so you can use functional composition and higher-order functions
// as much as you feel comfortable.