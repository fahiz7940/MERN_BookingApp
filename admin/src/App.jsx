import React from 'react'
import AdminTabel from './Components/AdminTabel'
import {ToastContainer, toast} from 'react-toastify'

export const backendUrl = 'http://localhost:4000'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <AdminTabel />
    </div>
  )
}

export default App
