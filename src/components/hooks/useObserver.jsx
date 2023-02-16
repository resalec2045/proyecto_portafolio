
import { useEffect, useRef, useState } from 'react'

export const useObserver = () => {
    
    const [elements, setElements] = useState([])
    const [entries, setEntries] = useState([])

    const observer = useRef( new IntersectionObserver(function(observedEntries) {
    
        setEntries(observedEntries)

    }, [] ) )

    useEffect(function() {
        const currentObserver = observer.current;
        currentObserver.disconnect()
        if ( elements.length > 0 ) {
            elements.forEach( element => currentObserver.observe(element) )
        }
        return function cleanUp() {
            if (currentObserver) {
                currentObserver.disconnect()
            }
        }
    }, [elements])

    return [
        observer.current, 
        setElements, 
        entries
    ]

}

