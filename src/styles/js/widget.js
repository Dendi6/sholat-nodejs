import { hrs, mnt, dd, MM, yyyy} from './time.js';

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
    
    if (x<10)
        gets = "0" + (MM + 1);
    else
        gets = (MM+1)

    return gets;
}

const currentDate= yyyy + "-" + bulan(MM) + "-" + tanggal(dd) ;
console.log(currentDate);

const sekarang = jam(hrs) + ":" + menit(mnt);

export {sekarang, currentDate};