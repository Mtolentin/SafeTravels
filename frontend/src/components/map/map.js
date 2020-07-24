import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import '../../css/map.css';

class Map extends React.Component{
    constructor(props) { 
        super(props); 
        this.state = {
            center: {
                lat: 37.77,
                lng: -122.43
            },
            zoom: 13,
            show: false
        }
    }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    _onChildClick = (key, childProps) => {
        this.setState({show: !this.state.show})
    }

    render() {
        
        if (!this.props.restaurants[0]) return null;

        return (
            <div className="google-map" style={{ height: '400px', width: '700px' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: "AIzaSyD08v3gCxdxpJfPbyVumLtw5qwPg2gPDTs",
                            language: 'en'
                        }}
                        defaultCenter={this.state.center}
                        defaultZoom={this.state.zoom}
                        onChildChick={this._onChildClick}
                    >
                        {this.props.restaurants[0].map((restaurant, i) => 
                        <Marker                     
                            lat={restaurant.latitude}
                            lng={restaurant.longitude}
                            show={this.state.show}
                            color="blue"
                            key={i}
                        />  
                        )}
           
                    </GoogleMapReact>
            </div>
        )
    }
}

export default Map;