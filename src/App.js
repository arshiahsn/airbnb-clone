import React from "react";
import Flat from "./components/flat.js"
import "./App.css"

class App extends React.Component {
    render () {
        const flat = {
            "name":"Some Flat",
            "imageUrl":"https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392",
            "price":"100",
            "priceCurrency":"$",
            "lat":"48.88",
            "lng": "2.44"
        }
        const flats = [flat, flat, flat];
        return (
            <div className="app">
                <div className="main">
                    <div className="search">
                    </div>
                    <div className="flats">
                        {flats.map((flat) => { return <Flat flat={flat} />})}
                    </div>
                    <div className="map">
                    </div>
                </div>
            </div>
            );
    }
}

export default App;