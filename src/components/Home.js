import React from 'react';
import Autocomplete from 'react-google-autocomplete';

import "../css/home.css";
import vid from "../img/background-video1.mp4";

class Home extends React.Component {

    // componentDidMount() {
    //     const script = document.createElement("script");
    //     script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDfTGTkObTRIDLZ4KVJTbdmPfXccrtYmuc&libraries=places&callback=";
    //     script.defer = true;
    //     document.body.appendChild(script);
    // }

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
                            {/* <input type="text" className="form-control" id="address-input" placeholder="Enter Address" /> */}
                            <Autocomplete
                                className="form-control"
                                id="address-input"
                                onPlaceSelected={(place) => {
                                    console.log(place);
                                }}
                                types={['address']}
                                componentRestrictions={{ country: "us" }}
                                placeholder="Enter address"
                                inputAutocompleteValue="off"

                            />
                            <select className="form-control" id="address-dropdown">
                                <option>Rent</option>
                                <option>Buy</option>
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