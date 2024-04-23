import BuyComponent from "../../components/BuyComponent"
import Navbar from "../../components/navbar/navbar"
import style from './style.module.css'

export default function BuyPage() {
  return (
    <>
      <div className={style['paraadiv']}></div>
      <Navbar />
      <BuyComponent />
    </>
  )
}
