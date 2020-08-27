import { baseUrl, status, json, error } from './api_config.js';
import { sekarang, currentDate} from './../js/widget.js';
import { updateTime, greeting, day, hari} from './../js/time.js';

//menampilkan waktu solat
const waktuSolat = () => {
    fetch(`${baseUrl}/sholat/format/json/jadwal/kota/663/tanggal/${currentDate}`)
    .then(status)
    .then(json)
    .then( (waktu) => {

        //Logika untuk menyapa
        const pemberitahuan = (y) => {
            let tahu;
        
            if (y > waktu.jadwal.data.isya || y < waktu.jadwal.data.subuh){
                tahu = '<b>Subuh</b> pukul <b>' + waktu.jadwal.data.subuh + '</b>';
            } else if ( y > waktu.jadwal.data.subuh && y < waktu.jadwal.data.dzuhur){
                tahu = '<b>Dzuhur</b> pukul <b>' + waktu.jadwal.data.dzuhur + '</b>';
            } else if ( y > waktu.jadwal.data.dzuhur && y < waktu.jadwal.data.ashar){
                tahu = '<b>Ashar</b> pukul <b>' + waktu.jadwal.data.ashar + '</b>';
            } else if ( y > waktu.jadwal.data.ashar && y < waktu.jadwal.data.maghrib){
                tahu = '<b>Magrib</b> pukul <b>' + waktu.jadwal.data.maghrib + '</b>';
            } else if ( y > waktu.jadwal.data.maghrib && y < waktu.jadwal.data.isya) {
                tahu = '<b>Isya</b> pukul <b>' + waktu.jadwal.data.isya + '</b>';
            } else {
                tahu = ' Aplikasi Sedang Eror, hubungi Admin';
            }
        
            return tahu;
        }

        const waktuSolat = document.querySelector("#waktuSolat");
        waktuSolat.innerHTML = "";
        updateTime();

        waktuSolat.innerHTML += `
            <div class="row">
                <div class="col s4 m6">
                    <center><img src="./../../images/mesjid.png" class="membaca right-align" alt="membaca"></center>
                </div>
                <div class="col s8 m6">
                    <p><span>${greeting()}</span></p>
                    <h4><span class="time span"></span></h4>
                    <p><b>${hari(day)}, <span class="date"></span></b></p>
                </div>
                
            </div>
            <table class="table striped">
                <thead>
                    <tr>
                        <th colspan="3" class="center-align">Jangan lupa solat ${pemberitahuan(sekarang)}</th>
                    </tr>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Sholat</th>
                        <th scope="col">Waktu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Subuh</td>
                        <td>${waktu.jadwal.data.subuh}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Dzuhur</td>
                        <td>${waktu.jadwal.data.dzuhur}</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Ashar</td>
                        <td>${waktu.jadwal.data.ashar}</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Maghrib</td>
                        <td>${waktu.jadwal.data.maghrib}</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
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
    .then( (suratAq) => {
        const surat = document.querySelector("#alquran");
        surat.innerHTML = "";
        
        suratAq.hasil.forEach((data) =>{
            surat.innerHTML += `
            <style>
                .nomor {
                    width: 100%; 
                    background-color: #4CAF50;
                    height:100px;
                    border-radius: 30px;
                }
                .nomor h4 {
                    color:white;
                }
                a p {
                    color:black;
                }
            </style>
            <a class="col s6 m3" href="./surah.html?nomor=${data.nomor}">
                <div class="card z-depth-1 hoverable"> 
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

export {waktuSolat,surat};