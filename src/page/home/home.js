import React, { useEffect } from "react"
export default function Home (props) {
    const { isFetching, data, error, find } = props
    useEffect(() => {
        find()
    }, [])

    return (<div>
        home 
        {
            isFetching ? <div>isFetching</div> : error ? <div>{error.message}</div> : <div>success</div>
        }
    </div>)
}