import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../../components/nav/Nav';
import moment from 'moment';

const PastApodContainer = () => {
    const currentDate = moment().format('YYYY-MM-DD');

    const [pastApod, setPastApod] = useState([])
    const [userInputCount, setUserInputCount] = useState(1)
    const [userInputStartDate, setUserInputStartDate] = useState([])
    const [userInputEndDate, setUserInputEndDate] = useState([])

    const fetchApod = (param) => {
        axios.get('/nasa/apod', {
            params: param
        })
            .then(function (response) {
                setPastApod(response.data)
                console.log(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (<>
        <Nav />
        <div className="m-3">
            <label>How many random past pictures would you like to view?</label>
            <div className='my-2'>
                <input type="number" onChange={(e) => setUserInputCount(e.target.value)} placeholder="Enter positive number" />
                <button type="button" className="btn btn-primary btn-sm mx-4" onClick={() => fetchApod({ count: userInputCount })}>View Pictures</button>
            </div>
        </div>
        <hr />
        <div className="m-3">
            <label>Select start and end dates in the past for which you would like to view pictures in: </label>
            <div className='my-2'>

                <input type="date" onChange={(e) => setUserInputStartDate(e.target.value)} min="1995-06-16" max={currentDate} />
                <span> to </span>
                <input type="date" onChange={(e) => setUserInputEndDate(e.target.value)} min="1995-06-16" max={currentDate} />

                <button type="button" className="btn btn-primary btn-sm mx-4" onClick={() => fetchApod({ "start-date": userInputStartDate, "end-date": userInputEndDate })}>View Pictures</button>
            </div>
        </div>

        {
            pastApod &&
            pastApod.map((apod, index) =>
                <div className="m-3" key={index}>
                    <h3>{apod.date}: {apod.title}</h3>
                    <img src={apod.url} alt={apod.title && "No Image for the day"} />
                    <p>{apod.explanation}</p>
                </div>
            )
        }

    </>)
}

export default PastApodContainer
