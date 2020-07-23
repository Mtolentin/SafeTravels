import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import SideNav from './sideNav';

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.entities.restaurants),
        errors: state.errors.restaurants
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurants()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SideNav);