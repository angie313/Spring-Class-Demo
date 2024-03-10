import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

    return (
        <>
            {
                responseErr &&
                <p className='text-danger m-3'>{responseErr.errorMessage}</p>
            }
            {
                todayNasaApod &&
                <div className="card my-4 w-75 mx-auto">

                    {todayNasaApod["media_type"] == "video"
                        ? <iframe height="650" src={todayNasaApod.url} />
                        : <img height="650" src={todayNasaApod.url} alt={todayNasaApod.title && "No Image for the day"} />
                    }
                    <div className="card-body">
                        <h4 className="card-title">{todayNasaApod.title}</h4>
                        <p className="card-text">{todayNasaApod.explanation}</p>
                        <p className='card-text text-end'><small className='text-body-secondary fs-5'>{todayNasaApod.date}</small></p>
                    </div>
                </div>
            }

        </>)
}

export default TodayApodContainer
