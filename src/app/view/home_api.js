import { baseUrl, status, json, error } from '../config/api_config.js';
import { updateTime, day, hari, sekarang, currentDate } from '../js/time.js';

//menampilkan waktu solat
const waktuSolat = () => {
    fetch(`${baseUrl}/sholat/format/json/jadwal/kota/663/tanggal/${currentDate}`)
        .then(status)
        .then(json)
        .then((waktu) => {

            //Logika untuk menyapa
            const pemberitahuan = (y) => {
                let tahu;

                if (y > waktu.jadwal.data.isya || y < waktu.jadwal.data.subuh) {
                    tahu = '<b class="primary-color">Subuh</b> pukul <b>' + waktu.jadwal.data.subuh + '</b>';
                } else if (y > waktu.jadwal.data.subuh && y < waktu.jadwal.data.dzuhur) {
                    tahu = '<b class="primary-color">Dzuhur</b> pukul <b>' + waktu.jadwal.data.dzuhur + '</b> WIB';
                } else if (y > waktu.jadwal.data.dzuhur && y < waktu.jadwal.data.ashar) {
                    tahu = '<b class="primary-color">Ashar</b> pukul <b>' + waktu.jadwal.data.ashar + '</b>';
                } else if (y > waktu.jadwal.data.ashar && y < waktu.jadwal.data.maghrib) {
                    tahu = '<b class="primary-color">Magrib</b> pukul <b>' + waktu.jadwal.data.maghrib + '</b>';
                } else if (y > waktu.jadwal.data.maghrib && y < waktu.jadwal.data.isya) {
                    tahu = '<b class="primary-color">Isya</b> pukul <b>' + waktu.jadwal.data.isya + '</b>';
                } else {
                    tahu = ' Aplikasi Sedang Eror, hubungi Admin';
                }

                return tahu;
            }

            const waktuSolat = document.querySelector("#waktuSolat");
            waktuSolat.innerHTML = "";
            updateTime();

            waktuSolat.innerHTML += `
            <div class="center" data-aos="slide-right">
                <h5 class="bold"><span class="date"></span> ${hari[day]}</h5>
                <h5 class="bold primary-color"><span class="time"></span> WIB</h5>
            </div>
            <div class="row mt-3">
                <a class="col s4 m4 l4" href="./view.html?id=1&type=kompas">
                    <div class="card radius-1 hoverable" data-aos="slide-right">
                        <div class="card-content">
                            <img src="./images/compas.svg" class="img-res" alt="compas">
                        </div>
                    </div>
                </a>
                <a class="col s4 m4 l4" href="./view.html?id=2&type=map">
                    <div class="card radius-1 hoverable" data-aos="slide-right">
                        <div class="card-content">
                            <img src="./images/map.svg" class="img-res" alt="map">
                        </div>
                    </div>
                </a>
                <a class="col s4 m4 l4" href="./view.html?id=3&type=wudhu">
                    <div class="card radius-1 hoverable" data-aos="slide-right">
                        <div class="card-content">
                            <img src="./images/wudhu.svg" class="img-res" alt="wudhu">
                        </div>
                    </div>
                </a>
            </div>
            <table class="card radius-2 table centered mt-3" data-aos="slide-right">
                <thead>
                    <tr>
                        <th colspan="2">${pemberitahuan(sekarang)}</th>
                    </tr>
                    <tr>
                        <th scope="col">Sholat</th>
                        <th scope="col">Waktu</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>Subuh</td>
                        <td>${waktu.jadwal.data.subuh}</td>
                    </tr>
                    <tr>
                        <td>Dzuhur</td>
                        <td>${waktu.jadwal.data.dzuhur}</td>
                    </tr>
                    <tr>
                        <td>Ashar</td>
                        <td>${waktu.jadwal.data.ashar}</td>
                    </tr>
                    <tr>
                        <td>Maghrib</td>
                        <td>${waktu.jadwal.data.maghrib}</td>
                    </tr>
                    <tr>
                        <td>Isya</td>
                        <td>${waktu.jadwal.data.isya}</td>
                    </tr>
                </tbody>
            </table>
        `;

            console.log(waktu);
        })
        .catch(error);
}

//Menampilkan kesuluruhan surah al-quran
const surat = () => {
    fetch(`${baseUrl}/quran/format/json/surat`)
        .then(status)
        .then(json)
        .then((suratAq) => {
            const surat = document.querySelector("#alquran");
            surat.innerHTML = "";

            suratAq.hasil.forEach((data) => {
                surat.innerHTML += `
            <style>
                .nomor {
                    width: 100%; 
                    background-color: #4CAF50;
                    height:100px;
                    border-radius: 20px;
                }
                .nomor h4 {
                    color:white;
                }
                a p {
                    color:black;
                }
            </style>
            <a class="col s6 m4 l3" href="./view.html?id=${data.nomor}&type=alquran">
                <div class="card radius-2 z-depth-1 hoverable" data-aos="slide-right"> 
                    <div class="row">
                        <div class="col s4 m4 nomor" >
                            <center><h4>${data.nomor}</h4></center>
                        </div>
                        <div class="card-content"">
                            <div class="col s8 m8">
                                <p><b>${data.nama}</b></p>
                                <p>${data.ayat}, ${data.type}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>`;
            });

            console.log(suratAq);
        })
        .catch(error);
}

export { waktuSolat, surat };