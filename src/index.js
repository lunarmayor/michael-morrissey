import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { unregister } from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppView from "views/AppView";
import HomeView from "views/HomeView";
import ArtView from "views/ArtView";
import IdentityView from "views/IdentityView";
import PortfolioView from "views/PortfolioView";
import WeWorkCaseStudy from "views/WeWorkCaseStudy";
import CTCACaseStudy from "views/CTCACaseStudy";

ReactDOM.render(
  <Router>
    <AppView>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/wework" component={WeWorkCaseStudy} />
      <Route exact path="/ctca" component={CTCACaseStudy} />
    </AppView>
  </Router>,
  document.getElementById("root")
);

unregister();
