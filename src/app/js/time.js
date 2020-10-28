import $ from "jquery";
import moment from "moment";

const myDate = new Date();
const hrs = myDate.getHours();
const mnt = myDate.getMinutes();
const day = myDate.getDay();
const dd = myDate.getDate(); //tanggal
const MM = myDate.getMonth(); //bulan
const yyyy = myDate.getFullYear(); //tahun

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

const hari = new Array("Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu");

const tahun = document.querySelector("#year_now");
tahun.innerHTML = yyyy;

const menit = (mn) => {
    let wt;

    if (mn<10)
        wt = "0" + mnt;
    else 
        wt = mnt;

    return wt;
}

const jam = (jm) => {
    let jams;

    if(jm<10)
        jams = "0" + hrs;
    else
        jams = hrs

    return jams
}

const tanggal = (tt) => {
    let tg;

    if (tt<10)
        tg = "0" + dd;
    else    
        tg = dd;

    return tg;
}

const bulan = (x) => {
    let gets;
    
    if(x<9){
        gets = "0" + (MM+1);
    } else {
        gets = (MM+1)
    }
    
    return gets;
}

const currentDate= yyyy + "-" + bulan(MM) + "-" + tanggal(dd) ;
console.log(currentDate);

const sekarang = jam(hrs) + ":" + menit(mnt);

export {day, sekarang, currentDate, updateTime, hari};