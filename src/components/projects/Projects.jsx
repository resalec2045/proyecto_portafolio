
import './projects.css'
import { useState } from "react"
import { useEffect } from 'react'
import { AllProjecs } from './types/AllProjecs'
import { MobileProjects } from './types/MobileProjects'
import { WebProjects } from './types/WebProjects'

export const Projects = () => {

    const [projectsType, setProjectsType] = useState("")

    useEffect(()=>{
        setProjectsType("all")
	}, [])

    return (
        <>
            <section className="projects section" id="portfolio">
                <h2 className="section__title">Portafolio</h2>
                <span className="section__subtitle">Proyectos</span>
                <div className="projects__container container grid">
                    <div className="projects__content grid">
                        <div className="projects__links">
                            <a className={ projectsType==="all" ? "project__link button" : "project__link"} onClick={ () => setProjectsType("all")} >All</a>
                            <a className={ projectsType==="web" ? "project__link button" : "project__link"} onClick={ () => setProjectsType("web")} >Web</a>
                            <a className={ projectsType==="mobile" ? "project__link button" : "project__link"} onClick={ () => setProjectsType("mobile")} >Mobile</a>
                        </div>
                        {
                            projectsType === "all" 
                            ? <div className="projects__cards grid"> <AllProjecs /> </div> 
                            : projectsType === "web" 
                            ? <div className="projects__cards grid"> <WebProjects /> </div>
                            : <div className="projects__cards grid"> <MobileProjects /> </div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
