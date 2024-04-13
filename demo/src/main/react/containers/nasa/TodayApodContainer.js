import React from 'react';
import ApodPictureCard from '../../components/ApodPictureCard';
import { nasaStore } from '../../resources/nasaStore.js'

const TodayApodContainer = () => {

    const todayNasaApod = nasaStore((state) => state.todayNasaApod)
    const responseErr = nasaStore((state) => state.responseErr)

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
