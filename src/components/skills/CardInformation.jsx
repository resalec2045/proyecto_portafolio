import './skill.css'

export const CardInformation = ( information ) => {

    const { name, place, date, description } = information;

    return (
        
        <div className="skill__info--card">
            <h3 className="card__name">{name}</h3>
            <span className="card__place">{place}</span>
            <p className="card__date">{date}</p>
            <p className="card__Description">{description}</p>
        </div>

    )
}
