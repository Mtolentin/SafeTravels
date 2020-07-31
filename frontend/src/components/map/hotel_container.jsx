import { connect } from 'react-redux';
import MapCanvas from './map';
import { fetchHotels } from '../../actions/hotel_actions';

const mapStateToProps = (state) => {
  return {
    hotels: Object.values(state.entities.hotels),
    itemType: 'hotels'

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHotels: () => dispatch(fetchHotels())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapCanvas);