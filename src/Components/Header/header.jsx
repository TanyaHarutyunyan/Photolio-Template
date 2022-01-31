import React from "react"
import classes from "./header.module.css"

function Header (){

    return (
        <header className={classes.header}>
            <div className={classes.title}>
                <h1>PHOTOLIO</h1>
                <p>A template made by w3.css for photographers.</p>
            </div>
        </header>
    )
}

export default Header