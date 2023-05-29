import React from "react";
import style from './footer.css'



export default function Footer(){

    return(

            <div className="allcolumns">
                <div className="firstcolumn">
                    <a href="#"><h1 className="logo">CONSTRUCTION</h1></a>
                    <p>You’ll find your next Home loan valu you prefer.</p>
                    <div className="socialmedias">
                        <a href=""><img src={require('./linkedin.png')} alt="" className="kek"/></a>
                        <a href=""><img src={require('./facebook.png')} alt="" className="kek"/></a>
                        <a href=""><img src={require('./twitter.png')} alt="" className="kek"/></a>
                    </div>
                </div>

                <div className="secondcolumn">
                    <h1 className="titler">Resources</h1>
                    <ul className="links">
                        <a href="/"><li>Home</li></a>
                        <a href="/about"><li>About Us</li></a>
                        <a href="/projects"><li>Projects</li></a>
                    </ul>
                </div>
            </div>
    )
}
