
import { useEffect } from 'react'
import { useObserver } from '../hooks/useObserver'

export const Observer = ( sectionName ) => {
    const [observer, setElements, entries] = useObserver({
        threshold: 0.99,
        root: null
    })

    useEffect( function() {
        
        const section = document.querySelectorAll(`.${sectionName}`);
        setElements(section)
        
    }, [setElements])
    
    useEffect(() => {
        
        entries.forEach( function(entry) {
            if ( entry.isIntersecting ) {
                const section = entry.target;
                section.src = section.dataset.src;
                section.classList.remove(`${sectionName}`);
                console.log("Guardado automatico")
                localStorage.setItem("section", `${sectionName}`);
            }
        })

    }, [entries, observer])    

}