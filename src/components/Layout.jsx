import { useState } from "react";
import Navbar from "./Navbar";
import {CiDark,CiLight} from 'react-icons/ci'
import '../styles/theme.css'

export default function Layout ({children}) {

    const [dark,setDark] = useState(false)

    return (
        <div className={`${dark ? "light min-h-screen min-w-full" : "dark min-h-screen min-w-full" }`}>
            <Navbar />
            <button className="fixed text-4xl border-2 border-[#464545a4] bg-[#464545a4] rounded-full bottom-4 right-4 w-fit" onClick={()=>{setDark(!dark)}}>            
                {
                    dark ? <CiDark /> : <CiLight />
                }
            </button>               
            {children}            
        </div>
    )
}