import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Signin from "./Screens/Signin";
import Signup from "./Screens/Signup";
import Home from "./Screens/Home";
import Blogs from "./Screens/Blogs";
import Upload from "./Screens/Upload";
import User from "./Screens/User";
import "./assets/main.css";
import SpecificDestination from "./Screens/SpecificDestination";
import AllTouristsPlaces from "./Screens/AllTouristsPlaces";
import PlacesByType from "./Screens/PlacesByType";
import PlacesByActivity from "./Screens/PlacesByActivity";

import PhotoGallery from "./Screens/Photogallery";

import AllRestaurants from "./Screens/AllRestaurants";
import HotelsPage from "./Screens/HotelsPage";
import BlogsForSpecificDest from "./Screens/BlogsForSpecificDest";
import SpecificTouristPlace from "./Screens/SpecificTouristPlace";
import SpecificBlogSreen from "./Screens/SpecificBlogSreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Signin />
        </Route>

        <Route path="/signin">
          <Signin />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/blogs">
          <Blogs />
        </Route>

        <Route path="/user">
          <User />
        </Route>

        <Route path="/upload">
          <Upload />
        </Route>

        <Route path="/alltouristsplaces">
          <AllTouristsPlaces />
        </Route>

        <Route path="/destination">
          <SpecificDestination />
        </Route>

        <Route path="/placesbytype">
          <PlacesByType />
        </Route>

        <Route path="/placesbyactivity">
          <PlacesByActivity />
        </Route>

        <Route path="/photogallery">
          <PhotoGallery />
        </Route>
        <Route path="/allrestaurants">
          <AllRestaurants />
        </Route>

        <Route path="/hotelspage">
          <HotelsPage />
        </Route>

        <Route path="/blogsforspecificdest">
          <BlogsForSpecificDest />
        </Route>

        <Route path="/specifictouristplace">
          <SpecificTouristPlace />
        </Route>

        <Route path="/specificblogscreen">
          <SpecificBlogSreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
