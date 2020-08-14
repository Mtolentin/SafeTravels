import { connect } from 'react-redux';
import { fetchHotels } from '../../actions/hotel_actions';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import { fetchActivities } from '../../actions/activity_actions';
import SideNav from './sideNav';

const mapStateToProps = (state) => {
    return {
        hotels: Object.values(state.entities.hotels),
        restaurants: Object.values(state.entities.restaurants),
        activities: Object.values(state.entities.activities)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHotels: () => dispatch(fetchHotels()),
        fetchRestaurants: () => dispatch(fetchRestaurants()),
        fetchActivities: () => dispatch(fetchActivities())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideNav);