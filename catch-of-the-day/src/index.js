import React from "react";
import { render } from "react-dom";
// Import Router
import Router from "./components/Router";
// Import Css
import "./css/style.css";

// Create Route between pages
render(<Router />, document.querySelector('#main'));
