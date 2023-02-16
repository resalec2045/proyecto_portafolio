import { Card } from "../Card"
import portafolio from '../../../assets/project-portafolio.png'

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
        </>
    )
}
