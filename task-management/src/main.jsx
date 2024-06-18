import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from './context/task.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // provider fonksiyonu tüm uygulamada geçerli olacak artık
  <Provider>
    <App />
  </Provider>
)
