import React, {Component} from 'react';
import Nav from '../components/nav/nav';
import './pages.css'

class viewPage extends Component {
    backToProfile = () => window.location.pathname = '/';
    render() {
        return (
            <div>
                <Nav
                    profilebtn={<button type="button" className="btn" id="profilegobtn">⬅ Profile</button>}
                    backToProfile={this.backToProfile}
                />

                <div class="container h-auto rounded">
                    <div class="row text-center">
                        <div class="col-lg-3">
                            {/* <button type='button' class='btn mx-1' id='backtoprofile'>⬅ Back to Profile</button> */}
                        </div>
                        <div class="col-lg-6">
                            <h1 class="myreviews">My Reviews</h1>
                        </div>
                        <div class="col-lg-3">
                            {/* <button type='button' class='btn mx-1' id='deleteall'>Delete all reviews ✖</button> */}
                        </div>
                    </div>
                    <div class="myreviewsdisplay">
                        <div class="row my-3" id="myreviewsrow"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default viewPage;