import './home.css'
import { Data } from './Data'
import { Social } from "./Social"
import { InView  } from 'react-intersection-observer'
import { useObserver } from '../hooks/useObserver'

export const Home = () => {

    // const [observer, setElements, entries] = useObserver({
    //     threshold: 0.25,
    //     root: null
    // })

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    

    return (
        <>
            <InView >
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
            </InView >
        </>
    )
}

