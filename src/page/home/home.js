import React, { useEffect } from "react"
export default function Home (props) {
    const { createCorporation } = props
    console.log(props)
    useEffect(() => {
        createCorporation({ a: 1})
    }, [])
    return (<div>
        home 
    </div>)
}