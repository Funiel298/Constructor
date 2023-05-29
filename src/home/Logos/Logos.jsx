import React from "react";
import style from './logos.css'
import {motion} from "framer-motion"
export default function Logos(){


    return(
        <motion.div 
        initial={{
            y: 100,
            opacity: 0,
            duration: 1
        }}
        viewport={{amount: 0.2, once: true}}
        whileInView={{
            y: 0,
            opacity: 1
        }}  className="logos">
            <img className="keklogos" src={require("./logos.png")} alt="#"/>
        </motion.div>
    )
}