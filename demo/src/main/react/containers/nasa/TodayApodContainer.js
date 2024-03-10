import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ApodPictureCard from '../../components/ApodPictureCard';

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
                <div className='my-4 w-75 mx-auto'>
                    <ApodPictureCard url={todayNasaApod.url} title={todayNasaApod.title} description={todayNasaApod.explanation} date={todayNasaApod.date} mediaType={todayNasaApod["media_type"]} index={1} />
                </div>
            }

        </>)
}

export default TodayApodContainer
