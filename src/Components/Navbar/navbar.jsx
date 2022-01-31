// import React, { useEffect, useState } from "react"
// import classes from "./navbar.module.css"

// function Navbar (){

//     const [toggle, setToggle] = useState()
//     const [barColor, setBarColor] = useState("white")
//     const [iconColor, setIconColor] = useState("color: rgb(179, 177, 177)")

//     function changeFlag (){
//         setToggle(!toggle)
//         toggle ? setBarColor("white") : setBarColor("rgb(20, 20, 20)")
//         toggle ? setIconColor("rgb(107, 104, 104)") : setIconColor("white")

//     }

//     return (
//         <div className={classes.navbarWrapper} style={{backgroundColor: barColor}}>
//             <div className={classes.smth}>Something I'm trying!</div>
//             <div className={classes.navbar}>
//                 <div onClick={changeFlag}><p className={classes.bar} style={{color: iconColor}}><i class="fas fa-bars"></i></p></div>
//             </div>
//             {toggle && (<div className={classes.menu}>
//                             <div>
//                                 <p>About</p>
//                                 <p>Photos</p>
//                                 <p>Shop</p>
//                                 <p>Contact</p>
//                             </div>
//                         </div>)}
//         </div>
//     )
// }

// export default Navbar

import React, { useEffect, useState } from "react"
import classes from "./navbar.module.css"

function Navbar (){

    const [barPos, setBarPos] = useState({transform: "translateY(-610px)"})
    function getNavbar(){
        console.log("Cliked")
        setBarPos({transform: "translateY(0px)"})
    }

    function clearMenu (){
        setBarPos({transform: "translateY(-610px)"})
    }
    
    return (
        <div className={classes.navbarWrapper}>
            <div className={classes.menuDiv} style={barPos}>
                <div className={classes.menu}>
                    <div className={classes.menuList}>
                        <p>About</p>
                        <p>Photos</p>
                        <p>Shop</p>
                        <p>Contact</p>
                    </div>
                    <div onClick={clearMenu}><p className={classes.closeIcon}><i class="fas fa-times"></i></p></div>
                 </div>
            </div>
            <div className={classes.navbar}>
                <div onClick={getNavbar}><p className={classes.barIcon}><i class="fas fa-bars"></i></p></div>
            </div>
        </div>
    )
}

export default Navbar