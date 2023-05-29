import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import FirstBlog from '../../home/FirstPage/FisrtBlog'
import About from "../../pages/About/About";
import Projects from '../../pages/Projects/Projects'
import Error from "../../pages/Error/Error";
import './Nav.css'
export function Nav(){

    const [isMenu, setMenu] = useState(true)
    function opener(){
        setMenu(!isMenu)
        console.log(isMenu)
    }


    return(
        <>
        
            <header className={'lolk'}>
                    <nav>
                        <a href="#"><h1 className="logo">CONSTRUCTION</h1></a>
                        <div className="links">
                            <ul className={isMenu ? `menulist` : `menulist active`}>
                                <a href="/"><li className="home activated">Home</li></a>
                                <a href="/about"><li className="activated" >About Us</li></a>
                                <a href="/projects"><li className="activated" >Project</li></a>
                            </ul>
                        </div>
                        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" alt="menuicon" width={20} className='menuicon' onClick={opener}/>
                    </nav>
            </header>


            <Routes>
                <Route path="/" element={<FirstBlog/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="*" element={<Error/>}/>

            </Routes>



        </>
    )
}