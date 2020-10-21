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
                        <h1>Find Your Home</h1>

                        <form>
                            <input type="text" />
                            <input type="submit" name="submit" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;