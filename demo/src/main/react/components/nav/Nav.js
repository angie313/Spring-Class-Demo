import React from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const nav = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg bg-dark-subtle">
            <div className="container-fluid">
                <a className="navbar-brand" onClick={(e) => { e.preventDefault(); nav("/") }} href="/">Web Dev</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" onClick={(e) => { e.preventDefault(); nav("/currentxkcdcomic") }} href="currentxkcdcomic">Current Comic</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={(e) => { e.preventDefault(); nav("/pastxkcdcomic") }} href='pastxkcdcomic'>Past Comic</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={(e) => { e.preventDefault(); nav("/today-nasa-picture") }} href='today-nasa-picture'>Today's NASA Picture</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={(e) => { e.preventDefault(); nav("/past-nasa-pictures") }} href='past-nasa-pictures'>Past NASA Pictures</a>
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