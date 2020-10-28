import "regenerator-runtime";
import "materialize-css";

import './app/css/style.css'
// import './app/config/sevice.js'
import {ayatbyid} from './app/view/view_api.js'

document.addEventListener("DOMContentLoaded", () => {
    ayatbyid();
});