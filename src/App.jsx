import { RouterProvider } from "react-router-dom"
import { router } from "./Router/router"

function App() {


  return (
    <div className="main-div">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
