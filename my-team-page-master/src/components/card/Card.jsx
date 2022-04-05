import './Card.css'

export default function Card({name, position, picture}){
    return (
        <>
            <div className="card">
                <div className="card_body">
                    <img src={picture} alt={`${name} ${position}`} />
                    <div className='position'>{position}</div>
                </div>
                <div className="card_footer">
                    <h3>{name}</h3>
                </div>
            </div>
        </>
    )
}