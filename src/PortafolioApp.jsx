
import { createContext, useState } from "react"
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header"
import { Home } from "./components/home/Home"
import { Projects } from "./components/projects/Projects";
import { ScrollUp } from "./components/scrollup/ScrollUp";
import { Skill } from "./components/skills/Skill";

export const themeContext = createContext(null); 

export const PortafolioApp = () => {
    
    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    
    const toggleTheme = () => {
        setTheme((curr) => (curr == "light" ? "dark" : "light"))
    }

    // // Selecciona la sección que deseas observar
    // var section = document.getElementById("home");

    // // Crea un nuevo objeto IntersectionObserver
    // var observer = new IntersectionObserver(function(entries) {
    // entries.forEach(function(entry) {
    //     if (entry.isIntersecting) {
    //     // La sección está en el viewport, cambia su estado
    //     section.classList.add("in-view");
    //     } else {
    //     // La sección no está en el viewport, restaura su estado anterior
    //     section.classList.remove("in-view");
    //     }
    // });
    // });

    // // Comienza a observar la sección
    // observer.observe(section);

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
                    <Footer/>
                    <ScrollUp />
                </div>
            </themeContext.Provider>
        </>
    )
}

