import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom';
 import 'antd/dist/antd.variable.min.css';
 import store from './app/store'
 import {Provider} from 'react-redux'
//  import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
     <Provider store={store}>
        <App />
     </Provider>
 
    </Router>
  </React.StrictMode>
)
