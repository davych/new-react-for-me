import React, { useEffect } from "react"
export default function Home (props) {
    const { createCorporationReducer, createCorporation } = props
    useEffect(() => {
        createCorporation({ payload: {a: 1} })
    }, [])
    return (<div>
        home 
    </div>)
}