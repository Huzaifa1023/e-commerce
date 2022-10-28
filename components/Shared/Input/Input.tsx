import React, { useRef } from 'react';

type propType = {
    type?: string,
    style?: React.CSSProperties,
    className?: string,
    placeholder?: string,
    name?:string,
    onChange?: (e:React.FormEvent<HTMLInputElement>)=> void,
}

const Input = ({ className, placeholder = "", style, type = "text", onChange,name }:propType) => {
    const ref = useRef<HTMLInputElement | null>(null);
    return (
        <input
            name={name}
            ref={ref}
            onChange={onChange}
            style={style}
            type={type}
            placeholder={placeholder}
            className={`${className} box-border outline-none px-4 py-2 rounded-lg border-2 border-primaryLight focus:bg-primaryLight text-slate-400`}
        />
    )
}

export default Input