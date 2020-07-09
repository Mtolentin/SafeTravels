import React from 'react';
import '../../css/main-page.css';

class MainPage extends React.Component {

  render() {
    return (
      <div className="splash-page">

        <div className="splash-image">
          <img id="image-content" src="https://mlp3dqjcgqiv.i.optimole.com/gg0613M-miO_raDW/w:auto/h:auto/q:auto/https://www.estria.org/wp-content/uploads/2018/07/Incarc_1200px.jpg" />
          <p id="description">
            We all want to support products that are created ethically, and contribute to greater justice in our world— 
            but finding such products can be complicated and time-consuming, and leave consumers overwhelmed. 
            Our Choices Matter is an app that makes that process easier, by helping you find independent BIPOC-owned businesses 
            and helping you avoid products made with exploitative labor practices— particularly sub-minimum-wage prison labor. 
            While our app has a host of exciting products to discover and rate, we are also more than a consumer review app. 
            We aim to build a larger community where all people interested in ethical labor practices can connect, ask questions, and organize. 
            Join a community of other people who believe that even among all the complicated, 
            structural problems in our world, we as individuals are never powerless. 
            Our choices matter— and together, our choices can make a difference in service of the liberation of incarcerated folks.
          </p>
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