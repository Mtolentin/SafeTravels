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
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
      <div className="index-main">
        <ProtectedRoute path="/index" component={SideNavContainer} /> 
        <ProtectedRoute path="/index" component={MapContainer} />
        <ProtectedRoute path="/index" component={ArticleIndexContainer} /> 
      </div>
      <div className="restaurant-main">
        <ProtectedRoute path="/restaurants" component={SideNavContainer} />
        <ProtectedRoute path="/restaurants" component={RestaurantContainer} />
        <ProtectedRoute path="/restaurants" component={ArticleIndexContainer} /> 
      </div>
      <div className="hotel-main">
        <ProtectedRoute path="/hotels" component={SideNavContainer} />
        <ProtectedRoute path="/hotels" component={HotelContainer} />
        <ProtectedRoute path="/hotels" component={ArticleIndexContainer} />
      </div>
      <div className="activity-main">
        <ProtectedRoute path="/activities" component={SideNavContainer} />
        <ProtectedRoute path="/activities" component={ActivityContainer} />
        <ProtectedRoute path="/activities" component={ArticleIndexContainer} />
      </div>
      <Footer /> 
  </div> 
);

export default App;