import logo from "../../assets/Logo-W.png";
import style from "./style.module.css";

export default function ReceptionPage() {
  return (
    <>
      <div className={style.paraadiv}></div>
      <div className={style.floating}>
        <div className={style.row}>
          <img src={logo} className={style.logoReception} width={'100%'} height={'fit'}></img>
        </div>
        <div className={style["row"]}>
          <button className={style.buttonReception}>ENTRAR</button>
        </div>
      </div>
    </>
  );
}
