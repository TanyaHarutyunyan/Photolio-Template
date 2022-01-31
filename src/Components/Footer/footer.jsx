import React from "react"
import classes from "./footer.module.css"

function Footer (){
    return (
        <footer className={classes.footer}>
            <div className={classes.iconsDiv}>
                <p><i class="fab fa-facebook-square"></i></p>
                <p><i class="fab fa-instagram"></i></p>
                <p><i class="fab fa-snapchat"></i></p>
                <p><i class="fab fa-pinterest"></i></p>
                <p><i class="fab fa-twitter"></i></p>
                <p><i class="fab fa-linkedin-in"></i></p>
            </div>
            <div className={classes.websiteLink}><p>Powered by <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a></p></div>
        </footer>
    )
}

export default Footer