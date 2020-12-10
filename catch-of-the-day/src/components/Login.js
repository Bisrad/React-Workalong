import React from "react";
import PropTypes from "prop-types";  

const Login = (props) => (
    <nav className="login">
        <h2>Login Here</h2>
        <p style={{ textAlign: "center" }}>Sign in to manage your store's inventor</p>
      
        <button className="google" 
        onClick={() => props.authenticate('Google')}
        >
            Login With Gmail
        </button>
        <button disabled={true} className="github" 
        onClick={() => props.authenticate('Github')}
        >
            Login With Github
        </button>
        <button disabled={true} className="twitter" 
        onClick={() => props.authenticate('Twitter')}
        >
            Login With Twitter
        </button>
        <button disabled={true} className="facebook" 
        onClick={() => props.authenticate('Facebook')}
        >
            Login With Facebook
        </button>
    </nav>
);

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login;   