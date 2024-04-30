import Navbar from "./components/navbar/navbar"
import SlideShow from "./components/slideshow/slideshow"
import Checkbox from "./components/checkbox/checkbox"
import Select from "./components/select/select"

import hijacked from './assets/hijacked.png'
import yatch from './assets/Yatch.png'
import { useState } from "react"

function App() {
  const [checkbox, setCheckbox] = useState(false)
  const nav_links = [["History", "/"], ["Cart", "/"], ["Shop", "/"], ["Home", "/"]]

  const [selectedOption, setSelectedOption] = useState('');

  function setCheckboxValue()
  {
    setCheckbox(!checkbox)
  }

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <>
      <Select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Option Input</option>
        <option value="option1">option - I</option>
        <option value="option2">Option - II</option>
        <option value="option3">Option - III</option>
        <option value="option3">Option - IV</option>
      </Select>
      <Navbar links={nav_links}/>
      <SlideShow images={[hijacked, yatch]}/>
      <Checkbox checked={checkbox} onChange={setCheckboxValue}/>
    </>
  )
}

export default App
