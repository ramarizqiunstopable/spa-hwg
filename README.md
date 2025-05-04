# Vue SPA Gallery

Proyek ini adalah aplikasi galeri foto berbasis Vue 3 yang menggunakan TypeScript. Aplikasi ini menyediakan fitur-fitur berikut:

## Fitur

- **Autocomplete Search**: Fitur pencarian dengan autocomplete.
- **Photo Gallery**: Menampilkan gambar dalam bentuk galeri.
- **Carousel**: Menampilkan gambar dalam bentuk carousel.
- **Tooltip**: Menampilkan informasi tambahan menggunakan tooltip.
- **Rating**: Memberikan rating pada gambar.
- **Dark Mode**: Mendukung mode gelap dan terang.
- **Sorting and Filtering**: Menyortir dan menyaring gambar berdasarkan kriteria tertentu.
- **SEO**: Aplikasi ini dioptimalkan untuk SEO.

## Fitur Tambahan (Improvment)

- **Sticky**: Fitur Navbar auto top fixed ketika user scroll ke bawah.
- **Notifikasi**: Fitur ketika user data yang tidak ditemukan pada fitur search.
- **Button Scroll to top**: Fitur Auto scroll to top ketika user klik button yang muncul ketika user sudah scroll paling bawah .
- **Efek Shake**: Animasi efek Shake ketika user hover setiap card.
- **Efek transparant Blur**: Animasi efek transparant Blur Navbar.

## Cara Menjalankan Proyek

1. Clone repository ini.
2. Install dependensi:
   ```bash
   npm install
   ```
3. Jalankan Apliksi:
   ```bash
   npm run dev
   ```

## Tantangan yang dihadapi

1. Mengimplementasikan fitur-fitur seperti autocomplete , solusinya harus membuat container sendri dan di styling agar tampil sugestions autocomlate
2. Menyesuaikan konfigurasi ESLint untuk Vue 3 dan TypeScript.
3. Mengimplementasikan Filter Rating salah Logicnya seharusnya menggunakan sintag "===" bukan ">=" agar bisa filter by rating yg dipilih
