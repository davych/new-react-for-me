import React, { useEffect } from "react"
export default function Home (props) {
    const { createCorporationReducer, createCorporationAction } = props
    useEffect(() => {
        createCorporationAction({ payload: {a: 1} })
    }, [])
    return (<div>
        home 
    </div>)
}