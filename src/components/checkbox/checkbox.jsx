import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import style from './style.module.css'

export default function Checkbox(props) {
    const [checkbox_width, set_checkbox_width] = useState("")
    const checkbox = useRef(null);

    useEffect(() => {
        if (checkbox.current) {
            const checkboxElement = checkbox.current;
            const height = checkboxElement.offsetHeight;
            set_checkbox_width(height + "px")
        }
    }, []);

    const boxShadowStyle = `inset 0 0 0 ${props.border ?? 'var(--checkbox-border)'} white`;
    
    return (
        <div
            className={style["checkbox_content"]}
            style={{ boxShadow: boxShadowStyle }}
            onClick={() => props.onChange()}
            >
            <div className={style["label"]}>
                <label>Label</label>
            </div>
            <div ref={checkbox} className={style["checkbox"]} style={{ width: checkbox_width }}>
                {props.checked &&
                    <FontAwesomeIcon
                        icon={props.icon ?? faCheck}
                        className={style["icon"]}
                        style={{ fontSize: props.size ?? "1.75em" }}
                    />
                }
            </div>
        </div>
    );
}