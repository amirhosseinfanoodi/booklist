import React from 'react'
import ReactDOM from 'react-dom/client'
import AddForm from './AddForm.jsx'
import Header from './Header/Header.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <AddForm />
  </React.StrictMode>,
)
