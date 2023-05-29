
import './Projects.css'
import Tab from '../../components/Tab/Tab'
import Section from "../../components/Section/Section"
import Footer from '../../home/Footer/Footer'
import { useState } from "react"
let imageArr =[
    [
        [
            'http://virmalda.lt/wp-content/uploads/2017/10/Foto17.jpg',
            'http://virmalda.lt/wp-content/uploads/2017/10/Foto18.jpg',
            'http://virmalda.lt/wp-content/uploads/2017/10/Foto19.jpg'
        ],
        [
            'http://virmalda.lt/wp-content/uploads/2017/10/Foto71.jpg',
            'http://virmalda.lt/wp-content/uploads/2017/10/Foto70.jpg'
        ]
        
    ],
    [
        [
            'http://virmalda.lt/wp-content/uploads/2017/10/Foto60.jpg',
            'http://virmalda.lt/wp-content/uploads/2017/10/Foto55.jpg',
            'http://virmalda.lt/wp-content/uploads/2017/10/Foto57.jpg'
        ],
        [
            'http://virmalda.lt/wp-content/uploads/2017/10/Foto28.jpg',
            'http://virmalda.lt/wp-content/uploads/2017/10/Foto29.jpg'
        ],
        [
            'http://virmalda.lt/wp-content/uploads/2017/10/Foto75.jpg',
            'http://virmalda.lt/wp-content/uploads/2017/10/Foto76.jpg'
        ],
    ],
    [
        [
            'http://virmalda.lt/wp-content/uploads/2018/04/IMG_20180419_125621_preview.jpeg',
            'http://virmalda.lt/wp-content/uploads/2018/04/IMG_20180419_130339.jpg',
            'http://virmalda.lt/wp-content/uploads/2018/04/IMG_20180419_130802.jpg',

        ],
        [
            'http://virmalda.lt/wp-content/uploads/2017/10/Foto79.jpg',
            'http://virmalda.lt/wp-content/uploads/2017/10/Foto81.jpg',
            'http://virmalda.lt/wp-content/uploads/2017/10/Foto81.jpg'
        ],
        [
            'http://virmalda.lt/wp-content/uploads/2018/04/Kalantos03.jpg',
            'http://virmalda.lt/wp-content/uploads/2018/04/Kalantos04.jpg',
            'http://virmalda.lt/wp-content/uploads/2018/04/Kalantos05.jpg'
        ]

    ]
]



    




export default function Projects(){

    
    
    

    return(
        <div className="projects">
            



            <Tab 
            children1={
                
                    <>
                        <Section name={'Friendship park in Sakiai'} 
                        desc={'The square and its approach preparation, retaining wall, carillon establishing works. '}
                        startDate={'Construction start: 2014 September'} 
                        endDate={'Construction end: 2015 January'}
                        imageArr={imageArr[0][0]} />
                        <Section name={'Student village renovation works in Kaunas University of Technology'} 
                        desc={'Sports ground and land plot renovation works'}
                        startDate={'Construction start: 2012 July'} 
                        endDate={'Construction end: 2014 August'}
                        imageArr={imageArr[0][1]} />
                        
                    </>
            }
            children2={
                <>
                    <Section name={'Philharmonic of Kaunas'} 
                    desc={'Structure major repair works.'}
                    startDate={'Construction start: 2005 October'} 
                    endDate={'Construction end: 2011 December'}
                    imageArr={imageArr[1][1]} /> 
                    <Section name={'St Arcangel Michael basil and Marion monastery in Marijampole'} 
                    desc={'Structure major repair works.'}
                    startDate={'Construction start: 2017 July'} 
                    endDate={'Construction end: 2017 August'}
                    imageArr={imageArr[1][2]} /> 
                    <Section name={'Philharmonic of Kaunas'} 
                    desc={'Structure major repair works.'}
                    startDate={'Construction start: 2005 October'} 
                    endDate={'Construction end: 2011 December'}
                    imageArr={imageArr[1][0]} /> 
                      
                </>
            }
            children3={
                <>
                     
                    <Section name={'Apartment building in Sukilėliu aveniu Kaunas'} 
                    desc={'Modernisation design and construction works'}
                    startDate={'Construction start: 2015 April'} 
                    endDate={'Construction end: 2016 May'}
                    imageArr={imageArr[2][0]} />
                    <Section name={'Kaunas University of Technology faculty in Kaunas'} 
                    desc={'Window, showcase and door replacement, facade'}
                    startDate={'Construction start: 2016 November'} 
                    endDate={'Construction end: 2017 June'}
                    imageArr={imageArr[2][1]} />
                    <Section name={'Apartment building in R. Kalantos str. Kaunas'} 
                    desc={'Modernisation design and construction works'}
                    startDate={'Construction start: 2015 July'} 
                    endDate={'Construction end: 2015 December   '}
                    imageArr={imageArr[2][2]} />
                </>
            }
             />
            <Footer/>
            </div>

            
    )
}