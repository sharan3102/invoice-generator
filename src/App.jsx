import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InvoiceForm from './components/Form/InvoiceForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InvoiceForm/>
    </>
    
  )
}

export default App
