import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


import '../css/app.css';

import Home from "./Home";
import Listing from "./Listing";

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
        <Switch>
          <Route exact path="/">
            <Home updateAddress={this.updateAddress} updateLookingTo={this.updateLookingTo} />
          </Route>
          <Route exact path="/listing">
            <Listing />
          </Route>
        </Switch>

      </div>
    )
  }
}

export default App;
