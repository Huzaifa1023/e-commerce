import React, { createContext, useEffect, useState } from "react";
import Notify from "../components/Shared/Notify";

type themeContextType = {
    notification: {
        visible: boolean,
        message: string,
        type: "success" | "danger" | "warning" | "info"
    },
    showNotification: (message:string,type:themeContextType["notification"]["type"]) => void,
}

type proptype = {
    children: JSX.Element | JSX.Element[]
}

export const ThemeContext = createContext<themeContextType>({
    notification: { message: "", visible: false,type:"info" }, showNotification: (message: string,type:themeContextType["notification"]["type"]) => { },
});

const ThemeProvider = ({ children }: proptype) => {
    const [notification, setNotification] = useState<themeContextType["notification"]>({
        visible: false,
        message: "",
        type:"info",
    });
    const showNotification = (message:string,type:themeContextType["notification"]["type"]) => {
        setNotification({
            visible: true,
            message,
            type
        })
    }

    useEffect(() => {
        if(notification.visible)
        setTimeout(() => {
            setNotification({
                visible: false,
                message: "",
                type:"info",
            })
        },3000)
    },[notification.visible])
    return (
        <>
            <Notify message={notification.message} show={notification.visible} type={notification.type} />
            <ThemeContext.Provider value={{ notification, showNotification }}>{children}</ThemeContext.Provider>
        </>
    )
}

export default ThemeProvider;