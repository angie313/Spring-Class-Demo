import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStore } from '../../resources/store.js'

// const AppContainer = (name, color, object) => {
const XkcdCurrentContainer = () => {
    const xkcdCurrent = useStore((state) => state.xkcdCurrentComic) // use zustand to manage state

    return (
        <div className='m-3'>
            <h1>{xkcdCurrent.title}</h1>
            <div>
                <img src={xkcdCurrent.img} alt={xkcdCurrent.alt ? xkcdCurrent.alt : "No Image for the day"} />
            </div>
            <p>{xkcdCurrent.transcript}</p>
        </div>
    )
}

export default XkcdCurrentContainer
