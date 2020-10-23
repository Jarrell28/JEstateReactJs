import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../css/app.css';

import Home from "./Home";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipCode: "",
      lookingTo: "Rent"
    }
  }

  updateAddress = (zipCode) => {
    this.setState({ zipCode });
  }

  updateLookingTo = (lookingTo) => {
    this.setState({ lookingTo });
  }

  render() {
    return (
      <div>
        <Router>

          <Switch>
            <Route path="/">
              <Home updateAddress={this.updateAddress} updateLookingTo={this.updateLookingTo} />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
