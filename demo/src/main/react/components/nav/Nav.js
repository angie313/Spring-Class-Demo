import React, { useEffect, useState } from 'react';
import axios from 'axios';

// const Nav = (props) => {
const Nav = () => {
    // const { name, color, object, count, increment } = props;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Web Dev Example</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="currentxkcdcomic">Current Comic</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='pastxkcdcomic' >Past Comic</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav

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