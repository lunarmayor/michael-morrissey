import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { unregister } from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppView from "views/AppView";
import HomeView from "views/HomeView";
import WeWorkCaseStudy from "views/WeWorkCaseStudy";
import SupercellCaseStudy from "views/SupercellCaseStudy";
import CTCACaseStudy from "views/CTCACaseStudy";

ReactDOM.render(
  <Router>
    <AppView>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/wework" component={WeWorkCaseStudy} />
      <Route exact path="/ctca" component={CTCACaseStudy} />
      <Route exact path="/supercell" component={SupercellCaseStudy} />
    </AppView>
  </Router>,
  document.getElementById("root")
);

unregister();
