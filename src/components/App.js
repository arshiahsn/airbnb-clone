import React from "react";
import Flat from "./components/flat.js"

class App extends React.Component {
    render () {
        const flat = {
            "name":"something",
            "imageURL":"www.something.com",
            "flatPrice":"100",
            "priceCurrency":"euro"
        }
        return <div>Hello {this.props.fname} {this.props.lname}</div>
    }
}

export default App;