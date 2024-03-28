import { useState } from 'react'
import './App.css'
import Tracker from "./tracker/tracker.component.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tracker />
    </>
  )
}

export default App
