
export const Card = ({ img, name, description }) => {
    
    return (
        <div className="project__card animate__animated animate__fadeIn">
            <div className="project__card--box">
                <img src={img} alt="portafolio" className={localStorage.getItem("theme") === 'light' ? "card__image--ligth card__image " : " card__image "} />
                <div className= "information__hover">
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="project__card--buttons">
                <a href="" className='button button-project'>
                    code
                    {
                        <svg fill="#f2f2f2" width="30px" height="30px" className='button__icon' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m9.539.613-3.9 14.55 1.209.324L10.746.937 9.54.612zm-5.63 3.434L.598 7.137a1.24 1.24 0 0 0 0 1.821l3.25 3.091.921-.85-3.321-3.15 3.321-3.112-.86-.89zm11.893 3.091-3.31-3.091-.861.91 3.32 3.091-3.32 3.111.92.85 3.251-3.05a1.242 1.242 0 0 0 0-1.821z"/></svg>                                        
                    }
                </a>
                <a href="" className='button button-project'>
                    Demo
                    {
                        <svg fill="#f2f2f2" width="30px" height="30px" className='button__icon' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 5.5A2.59 2.59 0 0 0 5.33 8 2.59 2.59 0 0 0 8 10.5 2.59 2.59 0 0 0 10.67 8 2.59 2.59 0 0 0 8 5.5zm0 3.75A1.35 1.35 0 0 1 6.58 8 1.35 1.35 0 0 1 8 6.75 1.35 1.35 0 0 1 9.42 8 1.35 1.35 0 0 1 8 9.25z"/><path d="M8 2.5A8.11 8.11 0 0 0 0 8a8.11 8.11 0 0 0 8 5.5A8.11 8.11 0 0 0 16 8a8.11 8.11 0 0 0-8-5.5zm5.4 7.5A6.91 6.91 0 0 1 8 12.25 6.91 6.91 0 0 1 2.6 10a7.2 7.2 0 0 1-1.27-2A7.2 7.2 0 0 1 2.6 6 6.91 6.91 0 0 1 8 3.75 6.91 6.91 0 0 1 13.4 6a7.2 7.2 0 0 1 1.27 2 7.2 7.2 0 0 1-1.27 2z"/></svg>
                    }
                </a>
            </div>
        </div>
    )
}
