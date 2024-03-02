import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../../components/nav/Nav'

const TodayApodContainer = () => {

    const [todayNasaApod, setTodayNasaApod] = useState({})

    useEffect(() => {
        axios.get('/nasa/apod')
            .then(function (response) {
                setTodayNasaApod(response.data[0])
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (<>
        <Nav />
        {
            todayNasaApod && <h1>Today's Picture: {todayNasaApod.date} {todayNasaApod.title} </h1>
        }
        {
            todayNasaApod &&
            <div>
                <img src={todayNasaApod.url} alt={todayNasaApod.title && "No Image for the day"} />
            </div>
        }
        <p>{todayNasaApod && todayNasaApod.explanation}</p>
    </>)
}

export default TodayApodContainer
