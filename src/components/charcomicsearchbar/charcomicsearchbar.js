import React from 'react';
import './charcomicsearchbar.css'
// import { tsPropertySignature } from '@babel/types';

function charcomicsearchbar(props) {
    return (
        <div>
            <div className="container" style={{background: "white", borderStyle: "solid", borderColor: "black", borderWidth: "5px", marginTop: "60px"}}>
                <div className="searchform">
                    <form>
                        <div className="form-group text-center my-2">
                            <h1 className="searchforanymarvelcharacter">{props.SEARCHcharORcomic}</h1>
                            <input type="search" 
                            className="form-control" 
                            name="searchedChar" 
                            placeholder={props.placeholder} 
                            value={props.value}
                            onChange={props.handleInputChange}
                            />
                            <button onClick={props.handleFormSubmit} type="submit" className="btn my-2 mx-2" id="searchbtn">Search <i
                                className="fas fa-search ml-1"></i></button>
                        </div>
                    </form>
                </div>
                <div className="characterdisplay text-center"></div>
            </div>
        </div>
    );
}

export default charcomicsearchbar;