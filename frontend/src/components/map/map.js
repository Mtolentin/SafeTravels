import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import '../../css/map.css';
import IndexCarousel from '../indexCarousel/indexCarousel';


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
        if(this.props.itemType === "restaurants") {
            this.props.fetchRestaurants();
        }

        if(this.props.itemType === "hotels") {
            this.props.fetchHotels();
        }

        if(this.props.itemType === "activities") {
            this.props.fetchActivities();
        }
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
        
        if(this.props.itemType === "restaurants") {
            if (!this.props.restaurants[0]) return null;
        };

        if(this.props.itemType === "hotels") {
            if (!this.props.hotels[0]) return null;
        };

        if(this.props.itemType === "activities") {
            if (!this.props.activities[0]) return null;
        };

        return (
            <div>
                <div className="google-map">
                        <Map
                            className="google-map-2"
                            google={this.props.google}
                            initialCenter={{ lat: 37.8, lng: -122.43}}
                            zoom={13}
                            onChildChick={this.onMapClicked}
                            containerStyle={{position: 'relative', height: '100%', width: '100%' }}
                        >
                            {(this.props.itemType === "restaurants") ?
                                (this.props.restaurants[0].map((restaurant, i) => 
                            
                                <Marker                
                                    position={{ 
                                        lat: restaurant.latitude,
                                        lng: restaurant.longitude
                                    }}
                                    key={i}
                                    onClick={this.onMarkerClick}
                                    name={restaurant.name}
                                    pictureURL={restaurant.pictureURL}
                                    link={restaurant.link1}
                                    category={restaurant.category}
                                />  
                                
                                )) : ""
                            }
                            
                            {(this.props.itemType === "hotels") ?
                                    (this.props.hotels[0].map((hotel, i) =>

                                <Marker
                                    position={{
                                        lat: hotel.latitude,
                                        lng: hotel.longitude
                                    }}
                                    key={i}
                                    onClick={this.onMarkerClick}
                                    name={hotel.name}
                                    pictureURL={hotel.pictureURL}
                                    description={hotel.description}
                    
                                />)) : ""
                            }

                            {(this.props.itemType === "activities") ?
                                (this.props.activities[0].map((activity, i) =>

                                <Marker
                                    position={{
                                        lat: activity.latitude,
                                        lng: activity.longitude
                                    }}
                                    key={i}
                                    onClick={this.onMarkerClick}
                                    name={activity.name}
                                    pictureURL={activity.pictureURL}
                                    link={activity.link1}
                                    description={activity.description}
                                />)) : ""
                            }

                            <InfoWindow
                                marker={this.state.activeMarker}
                                onClose={this.onInfoWindowClose}
                                visible={this.state.showingInfoWindow}
                            >
                                <div>
                                    <h4>{this.state.selectedPlace.name}</h4>
                                    <h4>{this.state.selectedPlace.category}</h4>
                                    <img src={this.state.selectedPlace.pictureURL}></img>
                                    <h4>{this.state.selectedPlace.address1}</h4>
                                    <h4>{this.state.selectedPlace.description}</h4>
                                    <a href={this.state.selectedPlace.link} target="_blank">{this.state.selectedPlace.link}</a>
                                </div>
                            </InfoWindow>
                
                        </Map>
                </div>
                {/* <IndexCarousel /> */}
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyD08v3gCxdxpJfPbyVumLtw5qwPg2gPDTs"
})(MapCanvas);