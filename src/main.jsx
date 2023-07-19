import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider} from 'react-redux'
import {store} from './redux/store.js'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'

if (import.meta.env.VITE_APP_CODE == "PRODUCTION") {
  disableReactDevTools()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
