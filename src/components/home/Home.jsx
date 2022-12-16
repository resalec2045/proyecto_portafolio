import './home.css'
import { Data } from './Data'
import { Social } from "./Social"

export const Home = () => {
    return (
        <>
            <section className="home section" id="home">
                <div className="home_container container grid">
                    <div className="home__content grid">
                        <Social/>
                        {/* TODO: Animaciones  animate__animated animate__bounce*/}
                        <div className="home__img animate__fadeIn"></div>
                        <Data/>
                    </div>
                </div>
            </section>

            

        </>
    )
}

