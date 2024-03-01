import React, { Component } from "react";
import ReactDom from "react-dom/client";
import AppContainer from "/containers/AppContainer.js"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import XkcdCurrentContainer from "./containers/xkcd/XkcdCurrentContainer";
import XkcdPastContainer from "./containers/xkcd/XkcdPastContainer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppContainer />
    },
    {
        path: "/currentxkcdcomic",
        element: <XkcdCurrentContainer />
    },
    {
        path: "/pastxkcdcomic",
        element: <XkcdPastContainer />
    },

])

ReactDom.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)

// export class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             obj: "Ball",
//             count: 0
//         }
//     }



//     render() {
//         const { obj, count } = this.state
//         const increment = () => {
//             this.setState({ count: this.state.count + 1 })
//         }
//         return (
//             <AppContainer
//                 name="Jose"
//                 color="Green"
//                 object={obj}
//                 count={count}
//                 increment={increment}
//             />
//         )
//     }
// }


// Notes:

//lifecycle methods:
// componentDidMount, runs once when component loads into DOM
//      API calls, setState
// componentDidUpdate, runs at every props or state change
//      prevProps, prevState and compare to current
// componentWillUnmount, runs once when component is going to be removed from DOM
//      cleanUp of subscriptions (Listeners)
// shouldComponentUpdate, runs at every props or state change
//      defaults to true, if returns false, component will not update