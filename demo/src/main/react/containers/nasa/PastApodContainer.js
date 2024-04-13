import React from 'react';
import ApodPictureCard from '../../components/ApodPictureCard';
import moment from 'moment';
import { nasaStore } from '../../resources/nasaStore.js'

const PastApodContainer = () => {
    const currentDate = moment().format('YYYY-MM-DD');
    // use zustand to manage state
    const pastApod = nasaStore((state) => state.pastApod)
    const userSelectDate = nasaStore((state) => state.userSelectDate)
    const userInputCount = nasaStore((state) => state.userInputCount)
    const userInputStartDate = nasaStore((state) => state.userInputStartDate)
    const userInputEndDate = nasaStore((state) => state.userInputEndDate)
    const setUserInputCount = nasaStore((state) => state.setUserInputCount)
    const setUserSelectDate = nasaStore((state) => state.setUserSelectDate)
    const setUserInputStartDate = nasaStore((state) => state.setUserInputStartDate)
    const setUserInputEndDate = nasaStore((state) => state.setUserInputEndDate)
    const responseErr = nasaStore((state) => state.responseErr)
    const fetchApod = nasaStore((state) => state.fetchApod)

    return (<>
        <div className='d-flex align-items-center flex-column'>

            <div className="my-3">
                <label className='mt-2'>How many random past pictures would you like to view? (Default: 1)</label>
                <div className='my-2'>
                    <input type="number" onChange={(e) => setUserInputCount(e.target.value)} placeholder="1" min="1" max="100" />
                    <button type="button" className="btn btn-primary btn-sm mx-4" onClick={() => fetchApod({ "count": userInputCount })}>View Pictures</button>
                </div>

                <label className='mt-2'>Select a date that you would like to view picture in: </label>
                <div className='my-2'>
                    <input type="date" onChange={(e) => setUserSelectDate(e.target.value)} min="1995-06-16" max={currentDate} />
                    <button type="button" className="btn btn-primary btn-sm mx-4" onClick={() => fetchApod({ "date": userSelectDate })}>View Picture</button>
                </div>

                <label className='mt-2'>Select date range in the past that you would like to view pictures in: </label>
                <div className='my-2'>
                    <span>From </span>
                    <input type="date" className='mx-2' onChange={(e) => setUserInputStartDate(e.target.value)} min="1995-06-16" max={currentDate} />
                    <span>To </span>
                    <input type="date" className='mx-2' onChange={(e) => setUserInputEndDate(e.target.value)} min="1995-06-16" max={currentDate} />

                    <button type="button" className="btn btn-primary btn-sm mx-4" onClick={() => fetchApod({ "start-date": userInputStartDate, "end-date": userInputEndDate })}>View Pictures</button>
                </div>
            </div>
        </div>

        {
            responseErr &&
            <p className='text-danger m-3'>{responseErr.errorMessage}</p>
        }
        {
            pastApod &&
            <div className={`w-75 mx-auto my-4 ${pastApod.length > 1 && "row row-cols-md-2 g-3"}`}>
                {
                    pastApod.map((apod, index) =>
                        <ApodPictureCard url={apod.url} title={apod.title} description={apod.explanation} date={apod.date} mediaType={apod["media_type"]} key={index} />
                    )
                }
            </div>
        }

    </>)
}

export default PastApodContainer
