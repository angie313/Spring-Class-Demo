import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

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
        <div className="m-3">
            <label>How many random past pictures would you like to view? (Default: 1)</label>
            <div className='my-2'>
                <input type="number" onChange={(e) => setUserInputCount(e.target.value)} placeholder="1" min="1" max="100" />
                <button type="button" className="btn btn-primary btn-sm mx-4" onClick={() => fetchApod({ "count": userInputCount })}>View Pictures</button>
            </div>
        </div>
        <hr />

        <div className="m-3">
            <label>Select a date that you would like to view picture in: </label>
            <div className='my-2'>
                <input type="date" onChange={(e) => setUserSelectDate(e.target.value)} min="1995-06-16" max={currentDate} />
                <button type="button" className="btn btn-primary btn-sm mx-4" onClick={() => fetchApod({ "date": userSelectDate })}>View Picture</button>
            </div>
        </div>
        <div className="m-3">
            <label>Select date range in the past that you would like to view pictures in: </label>
            <div className='my-2'>
                <span>From </span>
                <input type="date" className='mx-2' onChange={(e) => setUserInputStartDate(e.target.value)} min="1995-06-16" max={currentDate} />
                <span>To </span>
                <input type="date" className='mx-2' onChange={(e) => setUserInputEndDate(e.target.value)} min="1995-06-16" max={currentDate} />

                <button type="button" className="btn btn-primary btn-sm mx-4" onClick={() => fetchApod({ "start-date": userInputStartDate, "end-date": userInputEndDate })}>View Pictures</button>
            </div>
        </div>
        <hr />

        {
            responseErr &&
            <p className='text-danger m-3'>{responseErr.errorMessage}</p>
        }
        {
            pastApod &&
            <div className="row row-cols-3 row-cols-md-2 g-3 w-75 mx-auto mb-3">
                {
                    pastApod.map((apod, index) =>
                        <div className="card" key={index}>
                            {apod["media_type"] == "video"
                                ? <iframe height="400" src={apod.url} />
                                : <img height="400" className="card-img-top" src={apod.url} alt={apod.title && "No Image for the day"} />
                            }
                            <div className="card-body">
                                <h5 className="card-title">{apod.title}</h5>
                                <p className="card-text">{apod.explanation}</p>
                                <p className='card-text text-end'><small className='text-body-secondary fs-5'>{apod.date}</small></p>
                            </div>
                        </div>
                    )
                }
            </div>
        }

    </>)
}

export default PastApodContainer
