import "regenerator-runtime";

import './styles/js/materialize.min.js'
import './styles/css/style.css'
import './styles/js/sevice.js'
import './styles/js/time.js'
import {ayatbyid} from './styles/api/surah_api.js'

document.addEventListener("DOMContentLoaded", () => {
    ayatbyid();
});