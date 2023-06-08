import './about.css'
import Card from '../../components/Card/Card'
import Footer from '../../home/Footer/Footer'
import bgVideo from '../../video/builder.mp4'
export default function About(){

    let data = [
        {
            image: 'https://media.istockphoto.com/id/623604452/photo/taiwan-businessman.jpg?s=612x612&w=0&k=20&c=LRQeOn65CFrLkoXMODWxFuDGfevmnvw00dS7y0gBlnM=',
            name:'John Smith',
            position: 'Founder & CEO',
            desc: 'With over 30 years of experience in the construction industry, John has a keen eye for detail and a passion for delivering exceptional projects. He oversees all aspects of our business and ensures that every project meets our high standards of quality'
        },
        {
            image: 'https://media.istockphoto.com/id/1248747884/photo/smiling-handsome-middle-aged-man-in-black-shirt.jpg?s=612x612&w=0&k=20&c=Pu1yEcWxTXtqi8MJDbZGAh5ITlozFNjZjhW4A-XfvKI=',
            name:'Jane Doe',
            position: 'Project Manager',
            desc: 'Jane brings over 15 years of project management experience to our team, and she is dedicated to ensuring that every project runs smoothly from start to finish. She is an excellent communicator and is always available to answer our clients questions and concerns'
        },
        {
            image: 'https://media.istockphoto.com/id/1092311136/photo/portrait-of-a-senior-man-looking-at-the-camera-hes-confident.jpg?s=612x612&w=0&k=20&c=5DsGf_olCJXJ1VWXR9-52K4raCAlkft3UCX2kKg9tOw=',
            name:'Bob Johnson',
            position: 'Lead Carpenter',
            desc: 'Bob has been with our company for over 10 years and is a skilled craftsman with a passion for woodworking. He takes pride in his work and is committed to delivering exceptional results for every project he works on'
        },
    ]
    
    return(
        <>
            <div className="head">
                <video autoPlay loop muted className='mainImage' >
                    <source src={bgVideo} />
                </video>
                <h1 className="title">About</h1>
                <p>About our great team </p>
            </div>
            <div className='text'>
                <p style={{color: '#18A7B9', fontWeight: '900'}}>
                    Welcome to our building company! We are a team of experienced and dedicated professionals committed to delivering high-quality construction projects that exceed our clients' expectations.
                   At our company, we understand that building a home or a commercial space is a significant investment. That's why we take every project seriously and approach it with the same level of care and attention to detail. From concept to completion, we work closely with our clients to ensure that every aspect of the project meets their unique needs and specifications.
                </p>

                
            </div>
            <div className='mission'>
                <div className='pika'>
                    <h1 className='sectionName'>Mission and History</h1>

                    <div className='section'>
                        <img src="https://gopoly.com/images/2022/10/11/Smith__John_58gk5.jpeg?width=400" className='imagor' alt="#" />
                        
                        
                        <div className="paragraphy">
                            <p>
                                Our company was founded in 1995 by John Smith, a seasoned builder with a passion for quality craftsmanship. Over the years, we have grown into a team of experienced professionals with a reputation for excellence in the industry. We have completed hundreds of projects across the country, ranging from custom homes to commercial buildings, and we are proud to have received numerous awards and recognition for our work
                            </p>
                            <p>
                                Our mission is to deliver exceptional construction services that exceed our clients' expectations. We believe in building strong, lasting relationships with our clients and delivering projects on time and on budget. Our goal is to make the building process as smooth and stress-free as possible for our clients.

                            </p>
                        </div>
                    </div>

                    <h1 className='sectionName team'>Our Team</h1>
                    <p className='teamDesc'>Our team is made up of some of the most talented and experienced professionals in the industry. Meet our leadership team</p>
                    
                    
                    <div className='cards'>
                        {data.map((card) => 
                            <Card 
                                key={card.name}
                                position={card.position} 
                                name={card.name} 
                                image={card.image} 
                                desc={card.desc} />)}
                    </div>



                    <div>

                    </div>
                </div>
                
            </div>
            <Footer/>
           
        </>
    )
}