import React from 'react';
import "../css/home.css";
import vid from "../img/background-video1.mp4";

class Home extends React.Component {
    render() {
        return (
            <div>
                <div id="background">
                    <div class="overlay"></div>
                    <video id="video" autoPlay muted loop>
                        <source src={vid} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>

                    <div className="content-container">
                        <h1 className="home-header text-white">Find Your Home</h1>

                        <form className="form-inline" id="address-form">
                            <input type="text" className="form-control" id="address-input" placeholder="Enter Address" />
                            <select class="form-control" id="address-dropdown">
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