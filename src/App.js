import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Restaurants from "./Restaurants";
import Restaurant from "./Restaurants/Restaurant";

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
