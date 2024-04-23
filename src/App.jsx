import { width } from "@fortawesome/free-solid-svg-icons/fa0"
import Navbar from "./components/navbar/navbar"
import SlideShow from "./components/slideshow/slideshow"

import hijacked from './assets/hijacked.png'
import yatch from './assets/Yatch.png'

function App() {
  const nav_links = [["History", "/"], ["Cart", "/"], ["Shop", "/"], ["Home", "/"]]
  return (
    <>
      <Navbar links={nav_links}/>
      <SlideShow images={[hijacked, yatch]}/>
    </>
  )
}

export default App
