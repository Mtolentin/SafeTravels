import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import '../../css/map.css';

class Map extends React.Component{
    constructor(props) { 
        super(props); 
    
    }

    componentDidMount() {
        this.props.fetchRestaurants();
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
                        defaultCenter={{
                            lat: 37.77,
                            lng: -122.43
                        }}
                        defaultZoom={12}
                    >
                        {this.props.restaurants[0].map((restaurant, i) => 
                        <Marker                     
                            lat={restaurant.latitude}
                            lng={restaurant.longitude}
                            name={restaurant.name}
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