
import './about.css'

export const Interests = () => {
    return (
        <>

            <div className="about__interests">
                <h1 className='about__title'>Intereses</h1> 
                <div className="interests__container">
                    <article className="interest__item">
                        <i className='bx bxs-game interest__icon'></i>
                        <div className="interest__hover">
                            <h2 className="interest__title">Juegos</h2>
                        </div>
                    </article>
                    <article className="interest__item">
                        <i className='bx bxl-react interest__icon'></i>
                        <div className="interest__hover">
                            <h2 className="interest__title">React</h2>
                        </div>
                    </article>
                    <article className="interest__item">
                        <i className='bx bxl-java interest__icon'></i>
                        <div className="interest__hover">
                            <h2 className="interest__title">Java</h2>
                        </div>
                    </article>
                    <article className="interest__item">
                        <i className='bx bx-planet interest__icon'></i>
                        <div className="interest__hover">
                            <h2 className="interest__title">Astrología</h2>
                        </div>
                    </article>
                    <article className="interest__item">
                        <i className='bx bxs-guitar-amp interest__icon'></i>
                        <div className="interest__hover">
                            <h2 className="interest__title">Música</h2>
                        </div>
                    </article>
                    <article className="interest__item">
                        <i className='bx bxs-coffee-bean interest__icon'></i>
                        <div className="interest__hover">
                            <h2 className="interest__title">Café</h2>
                        </div>
                    </article>
                </div>
            </div>

        </>
    )
}
