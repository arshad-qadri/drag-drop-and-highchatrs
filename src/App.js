import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import DragDrop from "./pages/DragDrop";
import HighChart from "./pages/HighCharts";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={DragDrop} />
        <Route exact path="/charts" component={HighChart} />
      </Switch>
    </div>
  );
};

export default App;
