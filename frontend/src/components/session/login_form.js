import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/session-form.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Index page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/index');
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors })
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul className="errors-list">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="session-form-content">
            <div className="session-form-container">
              <img src={'https://our-choices-matter-seeds.s3.amazonaws.com/friends.jpg'} />
                <h1 className="session-form-title">Login into your account</h1>
                <div className="login-form-body">
                  <input className="session-input" type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    placeholder="Username"
                  />
                  <br />
                  <input className="session-input" type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="Password"
                  />
                  <br />
                  <input className="session-submit" type="submit" value="Login" />
                </div>
                <div className="errors-container">
                  {this.renderErrors()}
                </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);