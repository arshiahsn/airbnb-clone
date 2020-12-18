import React from "react";
import Flat from "./components/flat";
import "./App.css";
import GoogleMapsReact from 'google-map-react';
import Marker from './components/marker';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flats: []
        
        };
        
    }
    componentDidMount() {
        const url_ ="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
        fetch(url_)
        .then(response => response.json())
        .then(data => {
            this.setState({
                flats: data
            })
        })
    }


    render () {
        const center = {
            lat: 48.8566,
            lng: 2.3522
        }

        const flat = {
            "name":"Some Flat",
            "imageUrl":"https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392",
            "price":"100",
            "priceCurrency":"$",
            "lat":"48.88",
            "lng": "2.44"
        }
        
        
        return (
            <div className="app">
                <div className="main">
                    <div className="search">
                    </div>
                    <div className="flats">
                        {this.state.flats.map((flat) => { return <Flat flat={flat} />})}
                    </div>
                    <div className="map">
                        <GoogleMapsReact
                            defaultCenter = {center}
                            defaultZoom = {11} >
                            {this.state.flats.map((flat) => { return <Marker lat={flat.lat} lng={flat.lng} text={flat.price} />})}
                        </GoogleMapsReact>
                    </div>
                </div>
            </div>
            );
    }
}

export default App;