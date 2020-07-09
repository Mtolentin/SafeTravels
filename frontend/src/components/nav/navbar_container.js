import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => {
  return {
    loggedIn: state.session.isAuthenticated,
    demoUser: {username: "matthew", password: "hunter12"}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
