import { useState } from "react"
import Dashboard from "./components/dashboard"

function App() {

  const [group, setGroup] = useState(["admin"])

  return (
    <div>
      <Dashboard group={group} />
    </div>  
  )
}

export default App
