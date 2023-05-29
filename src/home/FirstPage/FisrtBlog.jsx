import React from "react";
import './FirstBlog.css'
import { motion } from "framer-motion"
import { Nav } from "../../components/Nav/Nav";
import Logos from "../Logos/Logos";
import Reasons from "../Reasons/Reasons";
import Bestie from "../Contact/Bestie";
import Footer from "../Footer/Footer";
export default function FirstBlog(){

    return(
        <>
            
            

            <div className="mainmenu">
                <motion.div className="maintext" 
                initial={{
                    x: -200,
                    opacity:0
                }}
                animate={{
                    x: 0,
                    
                    opacity:1
                }}
                transition={{
                    delay: 0.3,

                }}
                
                >
                    <h1><span className="bluetext">Masters</span> of <br />
                    Consistency and <br />
                    <span className="bluetext">Quality</span>.</h1>

                    <p>
                    Blessing welcomed ladyship she met humoured sir <br /> breeding her. Six curiosity day assurance bed necessary.

                    </p>
                    <a href='#message'><button className="explore">Contact Us</button></a>
                    
            <img src={require("./Vector.png")} alt="" className="vector" />

                    <div className="data">
                        <div className="numbers">
                            <img src={require("./orange.png")} alt="" className='number' />
                            <div className="num">
                                <h2>25,356</h2>
                                <p>Projects Done</p>
                            </div>
                        </div>
                        <div className="numbers">
                            <img src={require("./blue.png")} alt="" className='number' />
                            <div className="num">
                                <h2>15,200</h2>
                                <p>Buildings Done</p>
                            </div>
                        </div>
                        <div className="numbers">
                            <img src={require("./green.png")} alt="" className='number' />
                            <div className="num">
                                <h2>350+</h2>
                                <p>Total Employees</p>
                            </div>
                        </div>
                    </div>
                    
                </motion.div>

                <motion.div className="images"
                initial={{
                    x: 1000,
                    y: 0,
                    opacity:0
                }}
                animate={{
                    x: 0,
                    y: -100,
                    opacity:1
                }}
                transition={{
                    delay: 0.4,

                }}
                >
                    <img src={require("./Hero.png")} alt="" className="mainimage"/>
                </motion.div>
            </div>
            <Logos/>
            <Reasons/>
            <Bestie/>
            <Footer/>
            
            
        </>
    )
}