import { createContext, useState } from "react";

export const langContext = createContext()

export function LangProvider({children}){
    const [lang,setLang] = useState('en')

    return(
        <langContext.Provider value={{lang,setLang}}>
            {children}
        </langContext.Provider>
    )
}