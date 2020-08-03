import React from 'react';
import '../../css/main-page.css';
import Carousel from 'react-bootstrap/Carousel';

class MainPage extends React.Component {

  render() {
    return (
      <div className="splash-page">

        <div className="splash-image">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="https://images.wallpaperscraft.com/image/street_traffic_urban_123634_800x600.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Restaruants</h3>
                <p>See which restaruants are still open during the pandemic.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="https://www.sfexaminer.com/wp-content/uploads/2019/02/f.WalkSF.0715.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Activites</h3>
                <p>Find what activites you can do during the pandemic.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="https://media.atre.yardi.com/2/68521/images/San-Francisco-Proper-Hotel.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Hotels</h3>
                <p>Find hotels that are open during the pandemic.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default MainPage;