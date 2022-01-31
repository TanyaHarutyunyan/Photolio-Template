import React, { useState } from "react"
import classes from "./body.module.css"
import rocks1 from "../Pics/rocks (1).jpg"
import sound from "../Pics/sound.jpg"
import woods from "../Pics/woods.jpg"
import rock from "../Pics/rock.jpg"
import nature from "../Pics/nature.jpg"
import mist from "../Pics/mist.jpg"
import coffee from "../Pics/coffee.jpg"
import bridge from "../Pics/bridge.jpg"
import notebook from "../Pics/notebook.jpg"
import london from "../Pics/london.jpg"
import rocks from "../Pics/rocks.jpg"
import avatar from "../Pics/avatar_g.jpg"
import workbench from "../Pics/workbench.jpg"
import gondol from "../Pics/gondol.jpg"
import skies from "../Pics/skies.jpg"
import lights from "../Pics/lights.jpg"
import workshop from "../Pics/workshop.jpg"

function Body (){

    const [padding, setPadding] = useState("0px")

    function changePadding() {
        if (padding === "0px"){
            setPadding("10px")
        }else {
            setPadding("0px")
        }
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.buttonDiv}><button className={classes.btn} onClick={changePadding}>
        Toggle Grid Padding</button></div>
        <div className={classes.columnDiv}>
            <div className={classes.column1}>
                <img style={{padding: padding}} src={rocks1} alt="pic" />
                <img style={{padding: padding}} src={sound} alt="pic" />
                <img style={{padding: padding}} src={woods} alt="pic" />
                <img style={{padding: padding}} src={rock} alt="pic" />
                <img style={{padding: padding}} src={nature} alt="pic" />
                <img style={{padding: padding}} src={mist} alt="pic" />
            </div>
            <div className={classes.column2}>
                <img style={{padding: padding}} src={coffee} alt="pic" />
                <img style={{padding: padding}} src={bridge} alt="pic" />
                <img style={{padding: padding}} src={notebook} alt="pic" />
                <img style={{padding: padding}} src={london} alt="pic" />
                <img style={{padding: padding}} src={rocks} alt="pic" />
                <img style={{padding: padding}} src={avatar} alt="pic" />
            </div>
            <div className={classes.column3}>
                <img style={{padding: padding}} src={mist} alt="pic" />
                <img style={{padding: padding}} src={workbench} alt="pic" />
                <img style={{padding: padding}} src={gondol} alt="pic" />
                <img style={{padding: padding}} src={skies} alt="pic" />
                <img style={{padding: padding}} src={lights} alt="pic" />
                <img style={{padding: padding}} src={workshop} alt="pic" />
            </div>
        </div>
        </div>
    )
}

export default Body

// <div className={classes.cover} style={{backgroundImage: `url(${hamburger})`}}></div>