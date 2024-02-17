import MainLayout from "./components/layout/MainLayout"
import ProtectedRoute from "./components/layout/ProtectedRoute"



function App() {
// console.log("error")
  return (
    <>
  <ProtectedRoute><MainLayout/></ProtectedRoute>
    </>
  )
}

export default App
