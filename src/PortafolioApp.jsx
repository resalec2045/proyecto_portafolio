
import { createContext, useState } from "react"
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Header } from "./components/header/Header"
import { Home } from "./components/home/Home"
import { Projects } from "./components/projects/Projects";
import { Skill } from "./components/skills/Skill";


export const themeContext = createContext(null); 

export const PortafolioApp = () => {
    
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    
    const toggleTheme = () => {
        setTheme((curr) => (curr == "light" ? "dark" : "light"))
    }

    return (
        <>
            <themeContext.Provider value={{ theme, toggleTheme }}>
                <div className="App" id={ theme } >
                    <Header theme={theme} setTheme={setTheme} />
                    {/* Parte principal *main* */}
                    <main className="main">
                        <Home />
                        <About />
                        <Skill />
                        <Projects />
                        <Contact />
                    </main>
                    <footer className=""/>
                </div>
            </themeContext.Provider>
        </>
    )
}

