import React from "react";
import stl from "./Header.module.css"


export const Header = () => {
    return (
        <header className={stl.header}>
            <img style={{width: "50px", height: "100%", marginLeft: "5px"}}
                 src="https://icon-library.net/images/icon-png-logos/icon-png-logos-9.jpg" alt=""/>
        </header>
    )
}