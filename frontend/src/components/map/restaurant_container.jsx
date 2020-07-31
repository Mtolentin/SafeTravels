import { connect } from 'react-redux';
import MapCanvas from './map';
import { fetchRestaurants } from '../../actions/restaurant_actions';
// import { fetchHotels } from '../../actions/hotel_actions';
// import { fetchActivities } from '../../actions/activity_actions';

const mapStateToProps = (state) => {
    return {
        restaurants: Object.values(state.entities.restaurants),
        itemType: 'restaurants'
        // hotels: Object.values(state.entities.hotels),
        // activities: Object.values(state.entities.activities)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurants()),
        // fetchHotels: () => dispatch(fetchHotels()),
        // fetchActivities: () => dispatch(fetchActivities())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapCanvas);