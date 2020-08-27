import $ from "jquery";
import moment from "moment";

const displayTime = () => {
    moment.locale("id");
    $(".time").text(moment().format("LTS"));
    $(".date").text(moment().format("LL"));
};
 
const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000)
};

updateTime();

const sapa = (x) => {
    let greet;

    if (x < 9)
        greet = 'Selamat Pagi';
    else if (x >= 9 && x < 15)
        greet = 'Selamat Siang'
    else if (x >= 15 && x < 18)
        greet = 'Selamat Sore';
    else if (x >= 18 && x <= 24)
        greet = 'Selamat Malam';
    
    return greet;
}

const hari = (hr) => {
    let days;

    if ( hr >= 1 && hr < 2)
        days = 'Senin';
    else if ( hr >= 2 && hr < 3)
        days = 'Selasa';
    else if ( hr >= 3 && hr < 4)
        days = 'Rabu';
    else if ( hr >= 4 && hr < 5)
        days = 'Kamis';
    else if ( hr >= 5 && hr < 6)
        days = 'Jum`at';
    else if ( hr >= 6 && hr < 7)
        days = 'Sabtu';
    else if ( hr = 7)
        days = 'minggu';

    return days;
}

const myDate = new Date();
const hrs = myDate.getHours();
const mnt = myDate.getMinutes();
const day = myDate.getDay();
const dd = myDate.getDate(); //tanggal
const MM = myDate.getMonth(); //bulan
const yyyy = myDate.getFullYear(); //tahun

const greeting = () => {
    const nyapa = "<b>" + sapa(hrs) + ", Pengguna</b>" ;

    return nyapa;
}

const tahun = document.querySelector("#year_now");
tahun.innerHTML = yyyy;

export { hrs, mnt, day, dd ,MM, yyyy, updateTime, greeting, hari};