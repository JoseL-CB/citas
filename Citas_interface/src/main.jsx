import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ConfigProvider } from "antd"
ReactDOM.createRoot(document.getElementById('root')).render(

  < ConfigProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ConfigProvider>
)
