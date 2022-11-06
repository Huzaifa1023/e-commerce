import React from 'react'
import styles from './styles.module.css';

type propType = {
    message: string,
    show: boolean
    type: "success" | "danger" | "warning" | "info"
}

const Notify = ({ message, type,show }: propType) => {
    return (
        <div
            className={`${styles[type]} transition-all absolute ${!show ? "-top-12": ""} ${show ? "top-0": ""} left-1/2 -translate-x-1/2 py-2 px-6 rounded-lg text-sm`
        }
        >
            {message.toUpperCase()}
        </div>
    )
}

export default Notify