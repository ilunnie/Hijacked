import Navbar from "./components/navbar/navbar"
import SlideShow from "./components/slideshow/slideshow"
import Checkbox from "./components/checkbox/checkbox"

import hijacked from './assets/hijacked.png'
import yatch from './assets/Yatch.png'
import { useState } from "react"

function App() {
  const [checkbox, setCheckbox] = useState(false)
  const nav_links = [["History", "/"], ["Cart", "/"], ["Shop", "/"], ["Home", "/"]]

  function setCheckboxValue()
  {
    setCheckbox(!checkbox)
  }

  return (
    <>
      <Navbar links={nav_links}/>
      <SlideShow images={[hijacked, yatch]}/>
      <Checkbox checked={checkbox} onChange={setCheckboxValue}/>
    </>
  )
}

export default App
