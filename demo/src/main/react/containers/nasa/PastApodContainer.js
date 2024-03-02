import React, { useState } from 'react';
import axios from 'axios';
import Nav from '../../components/nav/Nav';
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
        <Nav />
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

        {
            responseErr &&
            <p className='text-danger m-3'>{responseErr.errorMessage}</p>
        }

        {
            pastApod &&
            pastApod.map((apod, index) =>
                <div className="m-3" key={index}>
                    <h3>{apod.date}: {apod.title}</h3>
                    {apod["media_type"] == "video"
                        ? <iframe width="560" height="400" src={apod.url} />
                        : <img src={apod.url} alt={apod.title && "No Image for the day"} />
                    }
                    <p className='my-1'>{apod.explanation}</p>
                </div>)
        }

    </>)
}

export default PastApodContainer
