# Aplikasi Catatan Pribadi - React Class Components

Aplikasi catatan pribadi sederhana yang dibangun menggunakan React dengan Class Components dan di-*bundle* menggunakan Vite. Aplikasi ini memungkinkan pengguna untuk membuat, melihat, mencari, mengarsipkan/mengaktifkan kembali, dan menghapus catatan.

## Fitur

* **Buat Catatan:** Menambahkan catatan baru dengan judul dan isi (body). Terdapat validasi batas karakter untuk judul (maksimal 50 karakter).
* **Lihat Catatan:** Menampilkan daftar catatan aktif dan catatan yang diarsipkan secara terpisah.
* **Cari Catatan:** Mencari catatan berdasarkan judul (case-insensitive) melalui *search bar*.
* **Arsipkan/Aktifkan:** Memindahkan catatan antara daftar aktif dan arsip.
* **Hapus Catatan:** Menghapus catatan secara permanen.
* **Tanggal Diformat:** Menampilkan tanggal pembuatan catatan dalam format yang mudah dibaca.

## Teknologi

* React (Class Components)
* Vite
* CSS
* JavaScript (ES6+)

## Prasyarat

* Node.js (disarankan versi LTS)
* npm (biasanya terinstal bersama Node.js)

## Cara Menjalankan

1.  *Clone* repositori ini:
    ```bash
    git clone <URL_REPOSITORY_ANDA>
    cd react-notes-app-classcomp
    ```
2.  Instal dependensi:
    ```bash
    npm install
    ```
3.  Jalankan aplikasi dalam mode pengembangan:
    ```bash
    npm run dev
    ```
4.  Buka browser dan akses `http://localhost:<PORT>` (port akan ditampilkan di terminal setelah menjalankan `npm run dev`, biasanya 5173).

## Skrip Tersedia

* `npm run dev`: Menjalankan aplikasi dalam mode pengembangan dengan *hot reload*.
* `npm run build`: Membangun aplikasi untuk produksi di direktori `dist`.
* `npm run lint`: Menjalankan ESLint untuk memeriksa *code style*.
* `npm run preview`: Menjalankan *build* produksi secara lokal untuk pratinjau.

---