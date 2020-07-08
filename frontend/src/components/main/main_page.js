import React from 'react';
import '../../css/main-page.css';

class MainPage extends React.Component {

  render() {
    return (
      <div className="splash-page">

        <div className="splash-image">
          <img id="image-content" src="https://via.placeholder.com/640x360" />
          <p id="description">Example Description text</p>
        </div>

        <div className="footer-bar">
          <footer className="copyright">
            Copyright &copy; 2020
          </footer>
        </div>
      </div>
    );
  }
}

export default MainPage;