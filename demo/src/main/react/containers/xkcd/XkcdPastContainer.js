import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../../components/nav/Nav'

// const AppContainer = (name, color, object) => {
const XkcdPastContainer = () => {

    const [xkcdPast, setXkcdPast] = useState({})
    const [userDefComicNum, setUserDefComicNum] = useState('')

    const fetchPastComic = (pastNum) => {
        // const defaultNum = xkcdCurrent.num ? xkcdCurrent.num : 2500;
        const defaultNum = 2500
        const count = pastNum || userDefComicNum ? pastNum || userDefComicNum : Math.floor(Math.random() * defaultNum);
        axios.get(`/xkcd/past/${count}`)
            .then(function (response) {
                setXkcdPast(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (<>
        <Nav />
        <div>
            <button type="button" className="btn btn-primary" onClick={() => fetchPastComic()}>Get Random Comic</button>
        </div>
        <div>
            <input type="text" value={userDefComicNum} onChange={(e) => setUserDefComicNum(e.target.value)} placeholder="Enter a desired comic number" />
            <button disabled={userDefComicNum ? false : true} type="button" className="btn btn-info" onClick={() => fetchPastComic(userDefComicNum)}>Get User Defined Comic</button>
        </div>
        <h1>{xkcdPast.title}</h1>
        <p>{xkcdPast.transcript}</p>
        <div>
            {
                xkcdPast && xkcdPast.img &&
                <img src={xkcdPast.img} alt={xkcdPast.alt ? xkcdPast.alt : "No Image for the past"} />
            }
        </div>
    </>)
}

export default XkcdPastContainer

