import React from 'react';
import Nav from '../components/nav/Nav';
import { Outlet } from 'react-router-dom';

// const AppContainer = (name, color, object) => {
const AppContainer = (props) => {

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