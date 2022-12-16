
import { createContext, useState } from "react"
import { Header } from "./components/header/Header"
import { Home } from "./components/home/Home"


export const themeContext = createContext(null); 

export const PortafolioApp = () => {

    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((curr) => (curr == "light" ? "dark" : "light"))
    }

    return (
        <>
            <themeContext.Provider value={{ theme, toggleTheme }}>
                <div className="App" id={ theme } >
                    <Header theme={theme} setTheme={setTheme} />
                    <main className="main">
                        <Home />
                    </main>
                </div>
            </themeContext.Provider>
        </>
    )
}

