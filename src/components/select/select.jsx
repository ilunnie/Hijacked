import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

import style from './style.module.css'

export default function Select(props) {
    const [open, setOpen] = useState(false)
    const [options, setOptions] = useState({})
    const selectRef = useRef(null);
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

    useEffect(() => {
        function handleClickOutside(event) {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={selectRef}>
            <div className={style["select_content"]} style={{ boxShadow: boxShadowStyle }} onClick={() => setOpen(!open)}>
                <div
                    style={{
                        margin: props.border ?? "var(--select-border)",
                        paddingInlineStart: props.margin ?? "var(--select-label-start)"
                    }}>
                    <label>{options[props.value]}</label>
                </div>
                <div
                    style={{ paddingInlineEnd: props.margin ?? "var(--select-label-start)" }}
                >
                    {open &&
                        <FontAwesomeIcon icon={faCaretUp} size='xl' /> ||
                        <FontAwesomeIcon icon={faCaretDown} size='xl' />
                    }
                </div>
            </div>
            {open &&
                <div
                    className={style['options']}
                    style={{
                        paddingBlock: props.border ?? "var(--select-border)",
                        boxShadow: boxShadowStyle
                    }}
                >
                    {Object.keys(options).map((value, key) => (
                        <>
                            {key !== 0 && <hr key={key + "_hr"} />}
                            <div
                                key={key}
                                className={style['option']}
                                onClick={() => {
                                    props.onChange(value)
                                    setOpen(false)
                                }}
                                style={{
                                    paddingInlineStart: props.margin ?? "var(--select-label-start)"
                                }}
                            >
                                <label>{options[value]}</label>
                            </div>
                        </>
                    ))}
                </div>
            }
        </div>
    );
}