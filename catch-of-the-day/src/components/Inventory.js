import React from "react";
import PropTypes from "prop-types"; 
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";  
import firebase from "firebase";
class Inventory extends React.Component {
  
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes:  PropTypes.func
  };

  authHandler = async (authData) => {
    console.log(authData);
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebase
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };
  
  render() {
    return (
    <Login authenticate={this.authenticate} />
     );
  }
}

export default Inventory;
