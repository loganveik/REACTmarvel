import React from 'react';
import './profcard.css'

function profcard(props) {
    return (
        <div>
            <div className="card" id="profcard">
                <a href={props.linkto}>
                    <img src={props.characterimg}
                        className="character img-responsive my-2" alt="char img here"/>
                </a>
                {/* <div className="card-body">Hello! Do Something</div> */}
            </div>
        </div>
    );
}

export default profcard;