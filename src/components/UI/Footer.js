import React from 'react'

import styles from "./Footer.module.css"
const Footer = () => {
    return (
        <div style={{position:'relative'}}>
        <div className={styles.foo}>
<svg xmlns="http://www.w3.org/2000/svg" style={{marginTop:'-15% '}} viewBox="0 0 1440 320"><path fill="#1f2831" fill-opacity="1" d="M0,96L60,106.7C120,117,240,139,360,170.7C480,203,600,245,720,234.7C840,224,960,160,1080,122.7C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

        <div className={styles.footer}>

            <p>Made with ❤️ by <a href="https://github.com/Ankita297" >Ankita</a> </p>
        </div>
        </div>
        </div>
    )
}

export default Footer
