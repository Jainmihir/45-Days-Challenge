import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import AppProps from './Props'
// import Mobile from './Mobile.jsx'
// import Data from './Data.jsx'
// import Form from './Form.jsx'
// import Hook from './hooks.jsx'
// import A from './a.jsx'
// import MulitpleUsers from './MultilpleUsers.jsx'
// import Redu from './reduce.jsx'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import {Counter }  from '../redux/count'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Counter/>
    {/* <Redu/>
    <A/>
    <MulitpleUsers/>
    <Hook/>
    <Form/>
    <Data/>
    <App/>
    <AppProps/> */}
  </Provider>,
)
