import React from "react";
import Flat from "./components/flat.js"

class App extends React.Component {
    render () {
        const flat = {
            "name":"something",
            "flatURL":"www.something.com",
            "flatPrice":"100",
            "priceCurrency":"euro"
        }
        return <div >
            <Flat flat={flat} />
            </div>
    }
}

export default App;