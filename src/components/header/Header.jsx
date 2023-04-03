
import React, { useEffect, useState } from 'react'

import './header.css'


export const Header = ({ theme, setTheme }) => {
    
    // Mostrar menu
    const[toogle, showMenu] = useState(false);
    const [toogleSection, setToogleSection] = useState(localStorage.getItem("section"))
    
    useEffect(() => {
        if ( toogleSection !== null ) {
            goSection( toogleSection )
        }
        setToogleSection('home')
    }, [])
    
    const saveTheme = (theme) => {
        localStorage.setItem("theme", theme);
        setTheme(theme)
    }
    const saveSection = (id) => {
        localStorage.setItem("section", id);
        setToogleSection(id)
    }
    const Buscador = ({href, icon, name}) => {
        return (
            <li className="nav__item">
                <a onClick={ () => saveSection(href) } href={ "#" + href } className="nav__link active-link">
                    <i className={ "uil uil-"+icon+" nav__icon" }></i>{ name }
                </a>
            </li>
        )
    }
    const goSection = (id) => {
        $('html, body').animate({
            scrollTop: $(`#${id}`).offset().top
        }, 1000);
    }

    return (
        <header className='header' id={ theme }>
            <nav className="nav container">
                <a href="#" className="nav__logo">| Andres</a>
                <div className={toogle ? "show-menu nav__menu" : "nav__menu"} id={ theme }>
                    <ul className="nav__list "> {/*grid*/}
                    
                        <Buscador 
                            href={'home'} icon={'estate'} name={'Home'} 
                        />

                        <Buscador 
                            href={'about'} icon={'user'} name={'About'} 
                        />

                        <Buscador 
                            href={'skill'} icon={'file-alt'} name={'Skill'} 
                        />

                        <Buscador 
                            href={'projects'} icon={'scenery'} name={'Portafolio'} 
                        />

                        <Buscador 
                            href={'contact'} icon={'message'} name={'Contact'} 
                        />

                        {
                            (theme==="light") 
                            ? <div onClick={() => saveTheme("dark")}>
                                <p className="theme__txt" > 
                                    <i className='bx bx-sun theme__icon'></i> Light 
                                </p> 
                            </div>
                            : <div className='theme__txt' onClick={() => saveTheme("light")} >
                                <i className='bx bx-moon theme__icon'></i> Dark 
                            </div> 
                        }
                         
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!toogle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!toogle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>   
        </header>
    )
}

