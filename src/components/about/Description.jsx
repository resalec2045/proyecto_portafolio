
import './about.css'

export const Description = () => {
    return (
        <>
            <div className="about__data">
                <h3 className="about__title">Descripción</h3>
                <p className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, expedita placeat! Cumque, temporibus esse omnis aspernatur architecto vitae porro ad corporis non ab modi quisquam necessitatibus expedita ratione! Eius, id?</p>
                <h3 className='about__title'>Datos personales</h3>
                <div className="about__description">
                    <p><b>Nacimiento:</b> 7 de septiembre 2003</p>
                    <p><b>edad:</b> 19 años</p>
                    <p><b>celular:</b> 3000000000</p>
                    <p><b>cargo:</b> Developer</p>
                </div>
            </div>
        </>
    )
}

