import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import useOnClickOutside from '../../../hooks/useOutsideClick';

type proptype = {
    children: JSX.Element[] | JSX.Element,
    open: boolean,
    onCLose:()=> void
    className?: string,
    style?: React.CSSProperties,
}

const Modal = ({ children, open = false, className, style,onCLose }: proptype) => {
    const modalRef = useRef(null)
    useOnClickOutside(modalRef, onCLose)
    let container;
    if (typeof window !== 'undefined' && open) {
        const rootContainer = document.createElement('div');
        rootContainer.setAttribute('id','modal')
        const parentElem: HTMLDivElement | null = document.querySelector('#__next');
        if (parentElem) parentElem.appendChild(rootContainer);
        container = rootContainer;
    }
    if (typeof window !== 'undefined' && !open) {
        const modal: HTMLDivElement | null = document.querySelector('#modal');
        const parentElem: HTMLDivElement | null = document.querySelector('#__next');
        if (modal && parentElem) parentElem.removeChild(modal);
        container = null
    }

    const element = (
        <div className='fixed top-0 left-0 w-full h-screen bg-zinc-800 bg-opacity-70 z-10'>
            <div ref={modalRef} style={style} className={`${className} rounded-md p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2  h-2/3 bg-zinc-100 shadow-md`}>
                {children}
            </div>
        </div>
    )

    return container ? ReactDOM.createPortal(element, container) : null;
}

export default React.memo(Modal);