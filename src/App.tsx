import { Outlet } from "react-router-dom"
import Routes from "./routes"

import "@/App.css"

function App() {
  return (
    <div>
      <Routes />
      <Outlet />
    </div>
  )
}

export default App
