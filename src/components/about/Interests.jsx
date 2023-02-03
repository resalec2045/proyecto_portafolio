
import './about.css'

export const Interests = () => {
    return (
        <>

            <div className="about__interests">
                <h1 className='about__title'>Intereses</h1> 
                <div className="interests__container">
                    <article className="interest__item">
                        <i className='bx bxs-game interest__icon'></i>
                        <div class="interest__hover">
                            <h2 class="interest__title">Juegos</h2>
                        </div>
                    </article>
                    <article className="interest__item">
                        <i className='bx bxl-react interest__icon'></i>
                        <div class="interest__hover">
                            <h2 class="interest__title">React</h2>
                        </div>
                    </article>
                    <article className="interest__item">
                        <i className='bx bxl-java interest__icon'></i>
                        <div class="interest__hover">
                            <h2 class="interest__title">Java</h2>
                        </div>
                    </article>
                    <article className="interest__item">
                        <i class='bx bx-planet interest__icon'></i>
                        <div class="interest__hover">
                            <h2 class="interest__title">Astrologia</h2>
                        </div>
                    </article>
                    <article className="interest__item">
                        <i className='bx bxs-guitar-amp interest__icon'></i>
                        <div class="interest__hover">
                            <h2 class="interest__title">Musica</h2>
                        </div>
                    </article>
                    <article className="interest__item">
                        <i className='bx bxs-coffee-bean interest__icon'></i>
                        <div class="interest__hover">
                            <h2 class="interest__title">Cafe</h2>
                        </div>
                    </article>
                </div>
            </div>

        </>
    )
}
