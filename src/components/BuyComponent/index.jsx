import style from './style.module.css'
import imgUrl from '../../assets/hijacked.png'

export default function BuyComponent()
{
    return (
        <div className={style['container']}>
            <div ><img src={imgUrl}></img></div>
        </div>
    )
}