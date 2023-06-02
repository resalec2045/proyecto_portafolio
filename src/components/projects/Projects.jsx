
import './projects.css'
import { useState } from "react"
import { useEffect } from 'react'
import { AllProjecs } from './types/AllProjecs'
import { Observer } from '../observer/Observer'
import { BackendProjects } from './types/BackendProjects'
import { FrontendProjects } from './types/FrontendProjects'

export const Projects = () => {

    const [projectsType, setProjectsType] = useState("")

    useEffect(()=>{
        setProjectsType("all")
	}, [])

    Observer("projects")

    return (
        <>
            <section className="projects section" id="projects">
                <h2 className="section__title">Portafolio</h2>
                <span className="section__subtitle">Proyectos</span>
                <div className="projects__container container grid">
                    <div className="projects__content grid">
                        <div className="projects__links">
                            <a className={ projectsType==="all" ? "project__link button" : "project__link"} onClick={ () => setProjectsType("all")} >All</a>
                            <a className={ projectsType==="frontend" ? "project__link button" : "project__link"} onClick={ () => setProjectsType("frontend")} >Frontend</a>
                            <a className={ projectsType==="backend" ? "project__link button" : "project__link"} onClick={ () => setProjectsType("backend")} >Backend</a>
                        </div>
                        {
                            projectsType === "all" 
                            ? <div className="projects__cards grid"> <AllProjecs /> </div> 
                            : projectsType === "frontend" 
                            ? <div className="projects__cards grid"> <FrontendProjects /> </div>
                            : <div className="projects__cards grid"> <BackendProjects /> </div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
