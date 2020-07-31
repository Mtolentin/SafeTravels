import { connect } from 'react-redux';
import MapCanvas from './map';
import { fetchActivities } from '../../actions/activity_actions';

const mapStateToProps = (state) => {
  return {
    activities: Object.values(state.entities.activities),
    itemType: 'activities'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchActivities: () => dispatch(fetchActivities())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapCanvas);