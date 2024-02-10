import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import analytics from '../analytics.js'

const app = createApp(App)
app.use(analytics)
app.mount('#app')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    inject();
  </React.StrictMode>,
)
