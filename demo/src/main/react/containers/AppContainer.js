import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const AppContainer = (name, color, object) => {
const AppContainer = (props) => {
    const { name, color, object, count, increment } = props;
    const [count2, setCount2] = useState(0)
    const [xkcdCurrent, setXkcdCurrent] = useState({})
    const [xkcdPast, setXkcdPast] = useState(null)


    useEffect(() => {
        axios.get('/xkcd/current')
            .then(function (response) {
                setXkcdCurrent(response.data)
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const fetchPastComic = (pastNum) => {
        const defaultNum = xkcdCurrent.num ? xkcdCurrent.num : 2500;
        const count = pastNum ? pastNum : Math.floor(Math.random() * defaultNum);
        axios.get(`/xkcd/past/${count}`)
            .then(function (response) {
                setXkcdPast(response.data)
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{name}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => setCount2(count2 + 1)}>{count2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => increment()}>{count}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <h1>Hello, world!</h1>
        <img src={xkcdCurrent.img} alt={xkcdCurrent.alt ? xkcdCurrent.alt : "No Image for the day"} />
        <h1>Past XKCD Comic</h1>
        <button type="button" className="btn btn-primary" onClick={() => fetchPastComic()}>Get Past Comic</button>
        {
            xkcdPast ?
                <img src={xkcdPast.img} alt={xkcdPast.alt ? xkcdPast.alt : "No Image for the past"} /> : null
        }
    </>)
}

export default AppContainer

// Notes:
// // componentDidMount equivalent
// useEffect(() => {

// }, [])

// // componentDidUpdate equivalent
// useEffect(() => {
//     // run every time when count changes
// }, [count])

// // componentWillUnmount equivalent
// useEffect(() => {
//     return function cleanUp(){
//         //cancel subscription listeners here
//     }
// })

// // componentDidMount and componentDidUpdate equivalent
// useEffect(() => {

// })