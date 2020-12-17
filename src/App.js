import React from "react";
import Flat from "./components/flat.js"

class App extends React.Component {
    render () {
        const flat = {
            "name":"something",
            "imageUrl":"https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392",
            "price":"100",
            "priceCurrency":"euro"
        }
        return <div >
            <Flat flat={flat} />
            </div>
    }
}

export default App;