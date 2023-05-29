import React from "react";
import './reasons.css'
import {motion} from 'framer-motion'

export default function Reasons(){

    let data =[{
        id: 1,
        image: './blue.png',
        paragraph: 'And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.'
    },
    {
        id: 2,
        image: './orange.png',
        paragraph: 'Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.'
    },
    {
        id: 3,
        image: './green.png',
        paragraph: 'Good draw knew bred ham busy his hour. Ask agreed answer rather joy nature admire wisdom.'
    },

]

    return(
        <>
            <div className="main">
                <motion.div 
                    initial={{
                        x: -100,
                        opacity: 0,
                        duration: 1
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    viewport={{amount: 0.2, once: true}}
                    className="image2">
                        <img className="againImage" src={require("./image.png")} alt="#" />
                </motion.div>
                    <div className="section1">
                        {data.map((data) => 
                            <motion.div 
                            initial={{
                                x: 100,
                                opacity: 0,
                                duration: 1
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1
                            }}
                            viewport={{amount: 0.2, once: true}}
                              className="number1" key={data.id}>
                                <div key={data.id} className="num">
                                    <img src={require(`${data.image}`)} alt="#" className="decoration" />
                                    <h2>0{data.id}</h2>
                                </div>
                                <div className="paragraph">
                                    <p>{data.paragraph}</p>   
                                </div>
                            </motion.div>
                        )}
                        
                        
                    </div>
                    
                </div>
        </>
    )
}