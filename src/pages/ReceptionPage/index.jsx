import logo from "../../assets/Logo-W.png";
import style from "./style.module.css";

export default function ReceptionPage() {
  return (
    <>
      <div className={style.paraadiv}></div>
      <div id="welcome" className={style.floating}>
        <div className={style.row}>
          <img
            src={logo}
            className={style.logoReception}
            width={"100%"}
            height={"fit"}
          ></img>
        </div>
        <div className={style.row}>
          <button className={style.buttonReception} onClick={() => {
            document.getElementById('welcome').classList.add(style.hide);
            document.getElementById('logindiv').classList.remove(style.hide)}
          }>ENTRAR</button>
        </div>
      </div>
      <div id="logindiv" className={`${style.floating} ${style.hide}`}>
        <div className={style.row}>
          <div className={style.card}>
            <img
              src={logo}
              className={style.cardimg}
              width={"100%"}
              height={"fit"}
            ></img>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.card} style={{justifyContent: 'left', flexFlow: 'column',height: 'auto', paddingTop: '5vh'}}>
            <div className={style.formGroup}>
              <label htmlFor="login">Login:</label>
              <input className={style.inputForm} type="text" id="login" />
            </div>
            <div className={style.formGroup}>
              <label htmlFor="password">Senha:</label>
              <input className={style.inputForm} type="password" id="login" />
            </div>
            <button className={style.buttonForm}>Entrar</button>
          </div>
        </div>
        {/* <div className={style.row}>
          <button className={style.buttonReception}>ENTRAR</button>
        </div> */}
      </div>
    </>
  );
}
