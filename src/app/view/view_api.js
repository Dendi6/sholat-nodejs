import { baseUrl, status, json, error } from '../config/api_config.js';

const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get("id");

const ayatbyid = () => {
    fetch(`${baseUrl}/quran/format/json/surat/${idParam}/ayat/1-10/bahasa/ar`)
    .then(status)
    .then(json)
    .then( (ayatAq) => {
        const ayat = document.querySelector("#ayat");
        ayat.innerHTML = "";

        const configayat = ayatAq.ayat.data;

        //ayat dalam bahasa arab
        configayat.ar.forEach( (data) => {
            ayat.innerHTML += `
                <tr>
                    <td class="right-align"><h5>${data.teks}<h5></td>
                    <td scope="row">${data.ayat}</td>
                </tr>
            `; 
        });
        // console.log(ayatAq);
    })
    .catch(error);
}

export {ayatbyid};