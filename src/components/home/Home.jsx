import './home.css'
import { Data } from './Data'
import { Social } from "./Social"
import { Observer } from '../observer/Observer'

export const Home = () => {

    Observer("home")

    return (
        <>
            <section className="home section" id="home">
                <div className="home_container container grid">
                    <div className="home__content grid">
                        <Social/>
                        {/* TODO: Animaciones  animate__animated animate__bounce*/}
                        <div className="home__img"></div>
                        <Data/>
                    </div>
                </div>
            </section>
        </>
    )
}

