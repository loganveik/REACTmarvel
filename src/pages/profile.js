import React from 'react';
import Nav from '../components/nav/nav';
import ProfCard from '../components/profcard/profcard';
import './pages.css'

function profPage() {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ProfCard
                            characterimg={"https://pngimg.com/uploads/captain_america/captain_america_PNG4.png"}
                            linkto={"/search/character"}
                        />
                    </div>
                    <div className="col-md-3">
                        <ProfCard
                            characterimg={"https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/781464/781464._SX1600_QL80_TTD_.jpg"}
                            linkto={"/search/comicbook"}
                        />
                    </div>
                    <div className="col-md-3">
                        <ProfCard
                            characterimg={"https://i.ya-webdesign.com/images/eraser-clipart-short-pencil-3.png"}
                            linkto={"/write"}
                        />
                    </div>
                    <div className="col-md-3">
                        <ProfCard
                            characterimg={"https://clipartion.com/wp-content/uploads/2015/11/pencil-and-paper-clipart-free-clipart-images.png"}
                            linkto={"/view"}
                        />
                    </div>
                </div>
            </div>
        </div>
        // col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3
    );
}

export default profPage;