
import './about.css'

export const Description = () => {
    return (
        <>
            <div className="about__data">
                <h3 className="about__title">Descripción</h3>
                <p className="about__description">
                    Mi nombre es <b>Andres Rios</b>, 
                    tengo 19 años de edad, soy un estudiante apasionado de Ingeniería de Sistemas y 
                    Desarrollador Web FrontEnd. Me gustaría tener la oportunidad de unirme a una empresa 
                    que me permita aplicar mis habilidades y conocimientos en un entorno en el que pueda 
                    continuar creciendo y desarrollándome profesionalmente. 
                </p>
                <h3 className='about__title'>Datos personales</h3>
                <div className="about__description">
                    <p><b>Nacimiento:</b> 7 de septiembre 2003</p>
                    <p><b>Edad:</b> 19 años</p>
                    <p><b>Celular:</b> 3006453071</p>
                    <p><b>Cargo:</b> Developer</p>
                </div>
            </div>
        </>
    )
}

