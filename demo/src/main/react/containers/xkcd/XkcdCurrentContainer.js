import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../../components/nav/Nav'

// const AppContainer = (name, color, object) => {
const XkcdCurrentContainer = () => {
    const [xkcdCurrent, setXkcdCurrent] = useState({})

    useEffect(() => {
        axios.get('/xkcd/current')
            .then(function (response) {
                setXkcdCurrent(response.data)
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (<>
        <Nav />
        <h1>{xkcdCurrent.title}</h1>
        <div>
            <img src={xkcdCurrent.img} alt={xkcdCurrent.alt ? xkcdCurrent.alt : "No Image for the day"} />
        </div>
        <p>{xkcdCurrent.transcript}</p>
    </>)
}

export default XkcdCurrentContainer
