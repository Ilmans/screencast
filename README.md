# 🎥 Screencast Website

Aplikasi screencast untuk membagikan video, bisa diakses secara gratis atau premium.

Dibuat menggunakan **Laravel** (backend) dan **React.js** melalui **Inertia.js** (frontend SPA).

---

## ⚙️ Cara Install & Jalankan

### 1. Clone Repo
```bash
git clone https://github.com/yourusername/screencast-website.git
cd screencast-website
```

### 2. Install Dependency PHP
```bash
composer install
```

### 3. Copy & Konfigurasi File .env
```bash
cp .env.example .env
```

Lalu atur konfigurasi database di file `.env`:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=namadb
DB_USERNAME=userdb
DB_PASSWORD=passdb
```

### 4. Generate App Key & Jalankan Migrasi
```bash
php artisan key:generate
php artisan migrate
```

### 5. Install Dependency Frontend
```bash
npm install
npm run dev
```

### 6. Jalankan Server Laravel
```bash
php artisan serve
```

Buka di browser: `http://localhost:8000`

---

## 📝 Catatan

- Pastikan database sudah dibuat sebelum menjalankan migrasi.
- Proyek ini menggunakan Inertia.js agar Laravel & React terhubung tanpa API tambahan.
- Untuk produksi, jalankan:
```bash
npm run build
```

---

## 🧾 Tech Stack

- Laravel (backend)
- React.js (frontend)
- Inertia.js (penghubung Laravel dan React)
- Tailwind CSS (jika digunakan)
- MySQL (database)

---

## 📄 Lisensi

MIT License
