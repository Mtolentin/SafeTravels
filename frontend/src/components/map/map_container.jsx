import { connect } from 'react-redux';
import MapCanvas from './map';
import { fetchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = (state) => {
    return {
        restaurants: Object.values(state.entities.restaurants)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurants())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapCanvas);