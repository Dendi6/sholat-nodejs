import "./../css/kompas.css";
import { kompas } from "./../js/kompas.js";
import { baseUrl, status, json, error } from '../config/api_config.js';

const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get("id");
const type = urlParams.get("type");

kompas()

console.log(type);

if (type == "kompas") {
    const kompas = () => {
        const kompas = document.querySelector("#view");
        kompas.innerHTML = `
            <section class="body">
                <div class="compass">
                    <div class="arrow"></div>
                    <div class="compass-circle"></div>
                    <div class="my-point"></div>
                </div>
            </section>
        `;
    }
    kompas();

    document.addEventListener("DOMContentLoaded", () => {
        kompas();
    });

} else if (type == "map") {
    const map = () => {
        const map = document.querySelector("#view");
        map.innerHTML = `
            <section class="body">
                <div class="center">
                    <h5>Mari Sholat di <br><span class="primary-color">Masjid</span></h5>
                    <p class="primary-color">Belum Siap di Dev</p>
                </div>
            </section>
        `;
    }
    map();

    document.addEventListener("DOMContentLoaded", () => {
        map();
    });
} else if (type == "wudhu") {
    const wudhu = () => {
        const wudhu = document.querySelector("#view");
        wudhu.innerHTML = `
            <section class="body">
                <div class="center">
                    <p class="primary-color">Belum Siap di Dev</p>
                </div>
            </section>
        `;
    }
    wudhu();

    document.addEventListener("DOMContentLoaded", () => {
        wudhu();
    });
} else {
    const ayatbyid = () => {
        fetch(`${baseUrl}/quran/format/json/surat/${idParam}/ayat/1-10/bahasa/ar`)
            .then(status)
            .then(json)
            .then((ayatAq) => {
                const ayat = document.querySelector("#view");
                ayat.innerHTML = "";

                const configayat = ayatAq.ayat.data;

                //ayat dalam bahasa arab
                configayat.ar.forEach((data) => {
                    ayat.innerHTML += `
                    <div class="row">
                        <div class="col s10 m10 l10 right-align">
                            <h5>${data.teks}<h5>
                        </div>
                        <div class="col s2 m2 l2 center-align">
                            <h5>${data.ayat}</h5>
                        </div>
                    </div>
                `;
                });
                // console.log(ayatAq);
            })
            .catch(error);
    }

    document.addEventListener("DOMContentLoaded", () => {
        ayatbyid();
    });
}