
import { Backend, Frontend } from './'
import './skill.css'
import cv from '../../assets/CV.pdf'

export const Skill = () => {
    return (
        <>
            <section className="skill section" id="skill">
                <h2 className="section__title">Habilidades</h2>
                <span className="section__subtitle">Formación</span>
                    <div className="skill__container container grid">
                        <div className="skills__content grid">
                            
                            <Frontend />
                            <Backend />

                            <div className="frontend__info">
                                <div className="skill__info--card">
                                    <h3 className="card__name">Ingeniería de Sistemas</h3>
                                    <span className="card__place">Universidad del Quindio</span>
                                    <p className="card__date">2020 - hasta la fecha</p>
                                    <p className="card__Description">- Estudiante de Ingeniería de Sistemas en la Universidad del Quindio, 5to semestre</p>
                                </div>
                                <div className="skill__info--card">
                                    <h3 className="card__name">Ingeniería de Sistemas</h3>
                                    <span className="card__place">Universidad del Quindio</span>
                                    <p className="card__date">2020 - hasta la fecha</p>
                                    <p className="card__Description">- Estudiante de Ingeniería de Sistemas en la Universidad del Quindio, 5to semestre</p>
                                </div>
                                <div className="skill__info--card">
                                    <h3 className="card__name">Ingeniería de Sistemas</h3>
                                    <span className="card__place">Universidad del Quindio</span>
                                    <p className="card__date">2020 - hasta la fecha</p>
                                    <p className="card__Description">- Estudiante de Ingeniería de Sistemas en la Universidad del Quindio, 5to semestre</p>
                                </div>
                            </div>

                            <div className="backend__info">
                                <div className="skill__info--card">
                                    <h3 className="card__name">Ingeniería de Sistemas</h3>
                                    <span className="card__place">Universidad del Quindio</span>
                                    <p className="card__date">2020 - hasta la fecha</p>
                                    <p className="card__Description">- Estudiante de Ingeniería de Sistemas en la Universidad del Quindio, 5to semestre</p>
                                </div>
                                <div className="skill__info--card">
                                    <h3 className="card__name">Ingeniería de Sistemas</h3>
                                    <span className="card__place">Universidad del Quindio</span>
                                    <p className="card__date">2020 - hasta la fecha</p>
                                    <p className="card__Description">- Estudiante de Ingeniería de Sistemas en la Universidad del Quindio, 5to semestre</p>
                                </div>
                                <div className="skill__info--card">
                                    <h3 className="card__name">Ingeniería de Sistemas</h3>
                                    <span className="card__place">Universidad del Quindio</span>
                                    <p className="card__date">2020 - hasta la fecha</p>
                                    <p className="card__Description">- Estudiante de Ingeniería de Sistemas en la Universidad del Quindio, 5to semestre</p>
                                </div>
                            </div>
                            
                            <div className="button__cv">
                                <a href={cv} download='' className='button' >Descargar cv</a>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}
