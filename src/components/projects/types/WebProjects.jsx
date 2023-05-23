import { Card } from "../Card"
import portafolio from '../../../assets/project-portafolio.png'
import ecommerce from '../../../assets/EcoClothes.png'
import calendar from '../../../assets/Calendar.png'

export const WebProjects = () => {
    return (
        <>
            <Card 
                img={portafolio} 
                name="Portafolio" 
                description="Html, Css, React y Javascript" 
                codeLink="https://github.com/resalec2045"
                demoLink="https://astounding-starship-bdac09.netlify.app"
            />
            <Card 
                img={ecommerce} 
                name="EcoClothes" 
                description="Html, Css, React, Typescript y Nodejs" 
                codeLink="https://github.com/EcommerceClothes"
                demoLink=""
            />
            <Card 
                img={calendar} 
                name="Calendar" 
                description="Html, Css, React, Javascript y Nodejs" 
                codeLink="https://github.com/resalec2045/calendar-FrontEnd"
                demoLink=""
            />
        </>
    )
}
