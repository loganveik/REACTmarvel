import React from 'react';

function nav() {
    return (
        <div>
            <nav className="nav text-center">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1280px-MarvelLogo.svg.png"
                        className="logo h-auto img-responsive my-2" style={{height:"175px", width:"125px", margin: "0px auto"}} />
                </div>
                <div className="col-lg-2">
                    {/* <button type="button" className="btn" id="logoutbtn">Logout</button> */}
                </div>
            </nav>
        </div>
    );
}

export default nav;