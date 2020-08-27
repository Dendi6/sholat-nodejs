import { baseUrl, status, json, error } from './api_config.js';

const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get("nomor");

//menampilkan ayat yang dibatasi 10 ayat setiap pemanggilan
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
                    <th scope="row">${data.ayat}</th>
                    <td class="right-align">${data.teks}</td>
                </tr>
            `; 
        });
        // console.log(ayatAq);
    })
    .catch(error);
}

export {ayatbyid};