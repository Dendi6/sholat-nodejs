## Sholat

**Version 1.0.0**</br>
Aplikasi sederhana untuk melihat jadwal sholat dan membaca al-quran
>https://sholat-day.web.app

---
## Download
untuk memulai projek lakukan clone. dengan cara
>git clone https://github.com/dendi6/sholat.git

## Memulai
saat projeck sudah di clone lakukan instalasi npm dengan cara
> npm install

## Menjalankan
Menjalankan projeck dapat dilakukan dengan 2 cara
```
  npm run build
  npm run start-dev
```
## Menggunakan Github Pages
Menggunakan github pages.
> npm install gh-pages

saat paket sudah selesai tambahkan homepage di berkas <b>package.json</b>
> "homepage" : "https://namagithub.github.io/namarepisitori/"

masih pada <b>package.json</b> tambahkan kata seperti ini di bagian script
```
  "predeploy" : "npm run build",</br>
  "deploy" : "gh-pages -d dist"
```

langkah terakhir dapat dilakukan dengan perintah
> npm run deploy

---
## Contributor
- Dendi

---
## copyright
© Dendi,
