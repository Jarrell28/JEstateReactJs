import React from 'react';
import "../css/home.css";

class Home extends React.Component {
    render() {
        return (
            <div>
                <div id="background">
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