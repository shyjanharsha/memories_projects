import React from 'react'
import ReactDOM from 'react-dom'
import { Provider} from 'react-redux'
import App from './App'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import './index.css'
//create store
const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
)



//{ npm install @material-ui/core} for UI
//{npm install jwt-decode react-goole-login}