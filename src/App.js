import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Restaurants from "./Restaurants/Restaurants";
import Restaurant from "./Restaurants/Restaurant/Restaurant";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route path="/" exact component={Restaurants} />
        <Route path="/:id" component={Restaurant} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
