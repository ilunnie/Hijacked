import style from './style.module.css'

export default function Menu(props) {
    const size = props.size ?? 3
    const gap = props.gap ?? 5
    const gapHover = props.gapHover ?? .4
    const thickness = props.thickness ?? 3

    return (
        <div
            className={style.menu}
            style={{
                width: 10 * size,
                '--gap-size': `${gap}px`,
                '--gap-hover-percent': gapHover}}>
            <div className={style.line_bar} style={{height: thickness}}></div>
            <div className={style.line_bar} style={{height: thickness}}></div>
            <div className={style.line_bar} style={{height: thickness}}></div>
        </div>
    )
}