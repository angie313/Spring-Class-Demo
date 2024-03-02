import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../../components/nav/Nav'

const TodayApodContainer = () => {

    const [todayNasaApod, setTodayNasaApod] = useState({})
    const [responseErr, setResponseErr] = useState({})

    useEffect(() => {
        axios.get('/nasa/apod')
            .then(function (response) {
                setTodayNasaApod(response.data[0])
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setResponseErr(error.response.data)
            })
    }, [])

    return (<>
        <Nav />
        {
            responseErr &&
            <p className='text-danger m-3'>{responseErr.errorMessage}</p>
        }
        {
            todayNasaApod &&
            <div className='m-3'>
                <h1>{todayNasaApod.date} {todayNasaApod.title} </h1>
                {todayNasaApod["media_type"] == "video"
                    ? <iframe width="560" height="400" src={todayNasaApod.url} />
                    : <img src={todayNasaApod.url} alt={todayNasaApod.title && "No Image for the day"} />
                }
                <p className='my-1'>{todayNasaApod.explanation}</p>
            </div>
        }
    </>)
}

export default TodayApodContainer
