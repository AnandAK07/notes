import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvider } from './components/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
//  2-B
 <AppContextProvider>
    <App />
 </AppContextProvider>
)