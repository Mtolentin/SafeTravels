import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import Marker from './marker';
import '../../css/map.css';
import '../../css/marker.css';

export class MapCanvas extends Component{
    constructor(props) { 
        super(props); 
        this.state = {
            activeMarker: {},
            selectedPlace: {},
            showingInfoWindow: false
        };

        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
    }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    onMarkerClick = (props, marker) =>
        this.setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true
        });

    onInfoWindowClose = () => 
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        });

    onMapClicked = () => {
            if(this.state.showingInfoWindow)
                this.setState({
                    activeMarker: null,
                    showingInfoWindow: false
                });
        };      

    render() {
        
        if (!this.props.restaurants[0]) return null;
        console.log(this.props.restaurants[0][0]);
        return (
            <div className="google-map" style={{ height: '400px', width: '700px' }}>
                    <Map
                        google={this.props.google}
                        initialCenter={{ lat: 37.77, lng: -122.43}}
                        zoom={13}
                        onChildChick={this.onMapClicked}
                        style={{ height: '400px', width: '700px' }}
                    >
                        {this.props.restaurants[0].map((restaurant, i) => 
                   
                        <Marker                
                            position={{ 
                                lat: restaurant.latitude,
                                lng: restaurant.longitude
                            }}
                            backgroundColor="blue"
                            key={i}
                            onClick={this.onMarkerClick}
                            name={restaurant.name}
                            pictureURL={restaurant.pictureURL}
                            link={restaurant.link1}
                            category={restaurant.category}
                        />  
                        
                        )}

                        <InfoWindow
                            marker={this.state.activeMarker}
                            onClose={this.onInfoWindowClose}
                            visible={this.state.showingInfoWindow}
                        >
                            <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                                <h4>{this.state.selectedPlace.category}</h4>
                                <img src={this.state.selectedPlace.pictureURL}></img>
                                <a href={this.state.selectedPlace.link} target="_blank">{this.state.selectedPlace.link}</a>
                            </div>
                        </InfoWindow>
           
                    </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyD08v3gCxdxpJfPbyVumLtw5qwPg2gPDTs"
})(MapCanvas);