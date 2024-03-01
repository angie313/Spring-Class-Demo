import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../components/nav/Nav';

// const AppContainer = (name, color, object) => {
const AppContainer = (props) => {
    // const { name, color, object, count, increment } = props;
    // const [count2, setCount2] = useState(0)
    // const [xkcdCurrent, setXkcdCurrent] = useState({})
    // const [xkcdPast, setXkcdPast] = useState(null)
    // const [userDefComicNum, setUserDefComicNum] = useState('')

    return (<>
        <Nav />
        <h1>Hello, world!</h1>
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