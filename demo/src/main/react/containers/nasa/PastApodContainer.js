import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import ApodPictureCard from '../../components/ApodPictureCard';

const PastApodContainer = () => {
    const currentDate = moment().format('YYYY-MM-DD');

    const [pastApod, setPastApod] = useState([])
    const [userSelectDate, setUserSelectDate] = useState(currentDate)
    const [userInputCount, setUserInputCount] = useState(1)
    const [userInputStartDate, setUserInputStartDate] = useState(currentDate)
    const [userInputEndDate, setUserInputEndDate] = useState(currentDate)
    const [responseErr, setResponseErr] = useState({})

    const fetchApod = (param) => {
        axios.get('/nasa/apod', {
            params: param
        })
            .then(function (response) {
                setPastApod(response.data)
            })
            .catch(function (error) {
                setResponseErr(error.response.data)
            })
    }

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
            <div className={`w-75 mx-auto my-4 ${pastApod.length > 1 && "row row-cols-3 row-cols-md-2 g-3"}`}>
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
