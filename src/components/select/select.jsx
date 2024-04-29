import { useState, useEffect } from 'react';
import style from './style.module.css'

export default function Select(props) {
    const [options, setOptions] = useState({})
    const boxShadowStyle = `inset 0 0 0 ${props.border ?? 'var(--select-border)'} white`;

    useEffect(() => {
        setOptions(() => ({}));

        props.children.forEach(element => {
            if (element.type === "option") {
                setOptions(prevOptions => ({
                    ...prevOptions,
                    [element.props.value]: element.props.children
                }));
            }
        });
        console.log(options)
    }, [props.children])

    return (
        <div className={style["select_content"]} style={{ boxShadow: boxShadowStyle }}>
            <div
                className={style["label"]} 
                style={{
                    margin: props.border ?? "var(--select-border)",
                    paddingInlineStart: props.margin ?? "var(--select-label-start)"
                }}>
                <label>{options[props.value]}</label>
            </div>
        </div>
    );
}