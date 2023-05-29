import React, { useState } from "react";
import './bestie.css'
import { motion} from 'framer-motion'
import Modal from "../../components/Window/Window";


export default function Bestie(){



    

    


    return(
        <div className="menu">

                
                    <motion.h1
                    initial={{
                        y: -100,
                            opacity: 0,
                            duration: 1
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        viewport={{amount: 0.5, once: true}}>Contact Us</motion.h1>
                   
                
                

                <motion.div
                 initial={{
                    y: -100,
                    opacity: 0,
                    duration: 2
                    
                }}
                viewport={{amount: 0.5, once: true}}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                 className="info">
                       
                    <div className="inputs" id="message">
                        <form>
                            <div className="group">      
                                <input type="text" required maxLength={20} minLength={2}/>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Name</label>
                            </div>
                            <div className="group">      
                                <input type="email" required minLength={5} maxLength={100} pattern='/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g'/>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Email</label>
                            </div>
                            <div className="group">      
                                <input type="text" required minLength={2}/>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Subject</label>
                            </div>
                            <div className="group">      
                                <input type="text" required minLength={2}/>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Message</label>
                            </div>
                            <button className="explore"  onClick={(e)=>e.stopPropogination()}>Explore</button>
                            
                        </form>
                        
                    </div>

                    <div>
                        <img className="map" src={require("./map.png")} alt="" />
                    </div>
                </motion.div>

                

                
                
        </div>
    )
}