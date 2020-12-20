import React from "react";
import Flat from "./components/flat";
import "./App.css";
import GoogleMapsReact from 'google-map-react';
import Marker from './components/marker';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            flats: [],
            selectedFlat: null,
            search: ""
            
        };
        
    }
    componentDidMount() {
        const url_ ="https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
        fetch(url_)
        .then(response => response.json())
        .then(data => {
            this.setState({
                flats: data,
                selectedFlat: null
            })
        })
    }

    selectFlat = (flat) => {
        this.setState({
            selectedFlat: flat
        })
    }

    handleSearch = (event) => {
        
        this.setState({
            
            search: event.target.value,
            flats: this.state.flats.filter((flat) => new RegExp(event.target.value,"i").exec(flat.name))
        })
    }

    render () {
        let center = {
            lat: 48.8566,
            lng: 2.3522
        }

        if(this.state.selectedFlat){
            
            center = {
                lat: this.state.selectedFlat.lat,
                lng: this.state.selectedFlat.lng
            }
            
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
                        <input
                        type="text"
                        placeholder="Search..."
                        value={this.state.search}
                        onChange={this.handleSearch} />
                    </div>
                    <div className="flats">
                        {this.state.flats.map((flat) => { return <Flat key = {flat.name} flat={flat} selectFlat={this.selectFlat}/>})}
                    </div>
                    <div className="map">
                        <GoogleMapsReact
                            defaultCenter = {center}
                            defaultZoom = {13} >
                            {this.state.flats.map((flat) => { return <Marker key={flat.name} lat={flat.lat} lng={flat.lng} text={flat.price} selected={flat === this.state.selectedFlat}/>})}
                        </GoogleMapsReact>
                    </div>
                </div>
            </div>
            );
    }
}

export default App;