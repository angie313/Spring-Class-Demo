import React from 'react';
import { useStore } from '../../resources/store.js'

// const AppContainer = (name, color, object) => {
const XkcdPastContainer = () => {

    // use zustand to manage state
    const xkcdPast = useStore((state) => state.xkcdPastComic)
    const fetchPastComic = useStore((state) => state.fetchPastComic)
    const userDefComicNum = useStore((state) => state.userDefComicNum)
    const setUserDefComicNum = useStore((state) => state.setUserDefComicNum)
    const setRandomComicNum = useStore((state) => state.setRandomComicNum)

    return (
        <div className='m-3'>

            <div className='mb-3'>
                <button type="button" className="btn btn-primary" onClick={() => { setRandomComicNum(); fetchPastComic() }}>Get Random Comic</button>
            </div>
            <div>
                <input type="text" value={userDefComicNum} onChange={(e) => setUserDefComicNum(e.target.value)} placeholder="Enter comic number" />
                <button disabled={userDefComicNum ? false : true} type="button" className="btn btn-info mx-2" onClick={() => fetchPastComic(userDefComicNum)}>Get User Defined Comic</button>
            </div>
            <br />
            <h1>{xkcdPast.title}</h1>
            <p>{xkcdPast.transcript}</p>
            <div>
                {
                    xkcdPast && xkcdPast.img &&
                    <img src={xkcdPast.img} alt={xkcdPast.alt ? xkcdPast.alt : "No Image for the past"} />
                }
            </div>
        </div>
    )
}

export default XkcdPastContainer

