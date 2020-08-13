import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../css/index-carousel.css';

class IndexCarousel extends React.Component{
    render(){
        return(
            <div className="index-carousel">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block mw-25 mh-25 carousel-img"
                  src="https://www.allworship.com/wp-content/uploads/2015/06/bigstock-Work-In-Progress-Concept-73569091-640x582.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Ad</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block mw-25 mh-25 carousel-img"
                  src="https://www.allworship.com/wp-content/uploads/2015/06/bigstock-Work-In-Progress-Concept-73569091-640x582.jpg"
                  alt="Second slide"
                />
  
                <Carousel.Caption>
                  <h3>Ad</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block mw-auto mh-auto carousel-img"
                  src="https://www.allworship.com/wp-content/uploads/2015/06/bigstock-Work-In-Progress-Concept-73569091-640x582.jpg"
                  alt="Third slide"
                />
  
                <Carousel.Caption>
                  <h3>Ad</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>            
        )
    }
}

export default IndexCarousel;