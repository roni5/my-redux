const middleware = process.env.NODE_ENV === 'production'
  ? [ thunk ]
  : [ thunk, logger() ];
let createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)