import { Card } from "../Card"
import portafolio from '../../../assets/project-portafolio.png'

export const MobileProjects = () => {
    return (
        <>
            <Card img={portafolio} name="Portafolio" description="Html, Css, React y Javascript" />
            <Card img={portafolio} name="Portafolio" description="Html, Css, React y Javascript" />
            <Card img={portafolio} name="Portafolio" description="Html, Css, React y Javascript" />
        </>
    )
}
