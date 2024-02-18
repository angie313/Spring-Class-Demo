import React, { Component } from "react";
import ReactDom from "react-dom";
import AppContainer from "/containers/AppContainer.js"

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: "Ball",
            count: 0
        }
    }



    render() {
        const { obj, count } = this.state
        const increment = () => {
            this.setState({ count: this.state.count + 1 })
        }
        return (
            <AppContainer
                name="Jose"
                color="Green"
                // object={this.state.obj}
                object={obj}
                count={count}
                increment={increment}
            />
        )
    }
}

ReactDom.render(<App />, document.querySelector("#app"));


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