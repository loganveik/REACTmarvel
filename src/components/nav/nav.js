import React from 'react';
import './nav.css'

function nav(props) {
    return (
        <div>
            <nav className="nav text-center">
                <div className="col-lg-2">
                    {props.profilebtn}
                </div>
                <div className="col-lg-8">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1280px-MarvelLogo.svg.png"
                        className="logo h-auto img-responsive my-2" alt="marvel logo" />
                </div>
                <div className="col-lg-2"></div>
            </nav>
        </div>
    );
}

export default nav;