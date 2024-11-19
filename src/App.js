import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
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

import States from "./context/states.js";
function App() {
  return (
    <States>
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/user" element={<User />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/alltouristsplaces" element={<AllTouristsPlaces />} />
      <Route path="/destination" element={<SpecificDestination />} />
      <Route path="/placesbytype" element={<PlacesByType />} />
      <Route path="/placesbyactivity" element={<PlacesByActivity />} />
      <Route path="/photogallery" element={<PhotoGallery />} />
      <Route path="/allrestaurants" element={<AllRestaurants />} />
      <Route path="/hotelspage" element={<HotelsPage />} />
      <Route path="/blogsforspecificdest" element={<BlogsForSpecificDest />} />
      <Route path="/specifictouristplace" element={<SpecificTouristPlace />} />
      <Route path="/specificblogscreen" element={<SpecificBlogSreen />} />
    </Routes>
  </Router>
</States>

  );
}

export default App;
