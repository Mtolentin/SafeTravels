import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import SideNavContainer from './sideNav/sideNav_container';
import MapContainer from './map/map_container';
import RestaurantContainer from './map/restaurant_container';
import HotelContainer from './map/hotel_container';
import ActivityContainer from './map/activity_container';
import Footer from './footer/footer';
import ArticleIndexContainer from './articles/articles_index_container';


const App = () => (

  <div className="safetravels">

    <div className = "appTop"> <NavBarContainer/> </div>

    <div className = "appMain">

      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>

      <div className="one-main">
        <ProtectedRoute path="/index" component={SideNavContainer} />
        <ProtectedRoute path="/hotels" component={SideNavContainer} />
        <ProtectedRoute path="/restaurants" component={SideNavContainer} />
        <ProtectedRoute path="/activities" component={SideNavContainer} />
        
        <div className="theMiddle">
          <ProtectedRoute path="/index" component={MapContainer} />
          <ProtectedRoute path="/hotels" component={HotelContainer} />
          <ProtectedRoute path="/restaurants" component={RestaurantContainer} />
          <ProtectedRoute path="/activities" component={ActivityContainer} />
        </div>

        <ProtectedRoute path="/index" component={ArticleIndexContainer} /> 
        <ProtectedRoute path="/hotels" component={ArticleIndexContainer} />
        <ProtectedRoute path="/restaurants" component={ArticleIndexContainer} /> 
        <ProtectedRoute path="/activities" component={ArticleIndexContainer} />
      </div>

    </div>
    
    <div className = "appBot"><Footer/></div> 
  
  </div> 
);

export default App;