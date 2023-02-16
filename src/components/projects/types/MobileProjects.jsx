import { Card } from "../Card"
import AnimalPaws from '../../../assets/AnimalPaws.png'

export const MobileProjects = () => {
    return (
        <>
            <Card 
                img={ AnimalPaws } 
                name="AnimalPaws" 
                description="Flutter" 
                codeLink="https://github.com/AnimalPaws/ap-mobile-app" 
                demoLink="" 
            />
        </>
    )
}
