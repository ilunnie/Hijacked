import Navbar from "./components/navbar/navbar"

function App() {
  const nav_links = [["History", "/"], ["Cart", "/"], ["Shop", "/"], ["Home", "/"]]
  return (
    <>
      <Navbar links={nav_links}/>
    </>
  )
}

export default App
