import React from 'react';
import Autocomplete from 'react-google-autocomplete';

import "../css/home.css";
import vid from "../img/background-video1.mp4";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    onSelectChange = (e) => {
        //Gets index of HTML selected option
        const selectedIndex = e.target.options.selectedIndex
        //Gets value of HTML selected option
        const selectValue = e.target.options[selectedIndex].value;

        //Updates state lookingTo variable
        this.props.updateLookingTo(selectValue);
    }

    //create function to validate address bar values

    render() {
        return (
            <div>
                <div id="background">
                    <div className="overlay"></div>
                    <video id="video" autoPlay muted loop>
                        <source src={vid} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>

                    <div className="content-container">
                        <h1 className="home-header text-white">Find Your Home</h1>

                        <form className="form-inline" id="address-form" autoComplete="off">
                            <Autocomplete
                                className="form-control"
                                id="address-input"
                                onPlaceSelected={(place) => {
                                    let zipCode = ""
                                    if (place.address_components[7].long_name) {
                                        zipCode = place.address_components[7].long_name;
                                    }
                                    console.log(place);
                                    this.props.updateAddress(zipCode);
                                }}
                                types={['address']}
                                componentRestrictions={{ country: "us" }}
                                placeholder="Enter street address or zip code"
                                inputAutocompleteValue="off"

                            />
                            <select className="form-control" id="address-dropdown" onChange={this.onSelectChange}>
                                <option value="Rent" defaultValue>Rent</option>
                                <option value="Buy">Buy</option>
                            </select>
                            <button type="submit" className="btn btn-primary" id="address-submit">Submit</button>
                        </form>
                    </div>
                </div>


            </div>
        )
    }
}

export default Home;