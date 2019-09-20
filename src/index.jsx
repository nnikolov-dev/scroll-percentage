import React, {createContext, useEffect, useState} from 'react'

const ScrollPercentageContext = React.createContext()

function ReactScrollP(props) {
    const defaultValue = props.defaultValue ? props.defaultValue : 0
    const [percentage, setPercentage] = useState(null)
    const handleScroll = (e) => {
        const current = e.target.scrollingElement.scrollTop
        const max = e.target.scrollingElement.scrollTopMax
        const zoom = defaultValue + (current / max) * 100
        setPercentage(zoom)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    return (
        <ScrollPercentageContext.Provider value={percentage}>
            {props.children}
        </ScrollPercentageContext.Provider>
    )
}

export {ScrollPercentage, ScrollPercentageContext}