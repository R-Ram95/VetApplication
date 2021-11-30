import React from "react";


const SearchBar = () => {

    return (
        <div className="columns is-centered">
            <div className="column is-two-thirds">
                <div className="columns">
                <div className="column  is-four-fifths">
                    <input id="input" class="input is-info is-rounded" type="text" placeholder="Search"></input>
                </div>
                <div className="column has-text-centered">
                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded">Search</button>
                </div>
                </div>
            </div>
        </div>
    )

};

export default SearchBar;