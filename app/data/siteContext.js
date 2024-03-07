"use client"

import { createContext } from "react";
import { useState } from "react";


export const siteContext = createContext({
    num: "", setNum: () => { },
})

export const SiteContextProvider = ({ children }) => {
    const [num, setNum] = useState(0)
    return (
        <siteContext.Provider value={{
            num, setNum
        }}>{children}</siteContext.Provider>
    )
}