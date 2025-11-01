import { useState } from 'react'
import CharacterList from './components/CharacterList.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CharacterList />
    </>
  )
}

export default App
