import React, { useEffect } from 'react';
import Nav from '../components/nav/Nav';
import { Outlet } from 'react-router-dom';
import { useStore } from '../resources/store.js'


// const AppContainer = (name, color, object) => {
const AppContainer = (props) => {
    const fetchCurrentComic = useStore((state) => state.fetchCurrentComic)

    useEffect(() => {
        fetchCurrentComic()
    }, [])

    return (<>
        <Nav />
        <Outlet />
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