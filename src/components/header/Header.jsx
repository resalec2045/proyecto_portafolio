
import React, { useState } from 'react'

import './header.css'

const Buscador = ({href, icon, name}) => {
    return (
        <li className="nav__item">
            <a href={"#" + href} className="nav__link active-link">
                <i className={"uil uil-"+icon+" nav__icon"}></i>{name}
            </a>
        </li>
    )
}

export const Header = ({ theme, setTheme }) => {
    
    // Mostrar menu
    const[toogle, showMenu] = useState(false);

    const saveTheme = (theme) => {
        localStorage.setItem("theme", theme);
        setTheme(theme)
    }

    return (
        <header className='header' id={ theme }>
            <nav className="nav container">
                <a href="main.html" className="nav__logo">| Andres</a>
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
                            href={'portfolio'} icon={'scenery'} name={'Portafolio'} 
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

