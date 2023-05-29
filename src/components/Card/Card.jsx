import './Card.css'
export default function Card({name, image, desc, position}){
    return(
        <div className="card">
            <div className='image-container'>
                <img src={image} className='image'  alt="#" />
            </div>
            <h3>{name}</h3>
            <span style={{color: '#18A7B9'}}>{position}</span>
            <p className='descc'>{desc}</p>
        </div>
    )
}