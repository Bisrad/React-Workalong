import React from "react";
// Install PropTypes for build 
// Know you are passing in the right data as well as the right type of data
import PropTypes from "prop-types";  

// Stateless functional component +
// arrow function with implicit return 
const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

// Require PropTypes in Build Env
Header.propTypes ={
  tagline: PropTypes.string.isRequired
}

export default Header; 