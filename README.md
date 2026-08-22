# Lagersons Shoes — situs statis

Isi folder ini siap diunggah apa adanya ke GitHub Pages.

## Cara publikasi
1. Buat repo baru di GitHub (mis. `lagersons-shoes`).
2. Unggah **semua isi folder ini** ke root repo (bukan foldernya, tapi isinya).
3. Settings -> Pages -> Source: `Deploy from a branch`, Branch: `main` / `(root)`.
4. Situs tayang di `https://<username>.github.io/<repo>/`.

## Struktur
- `index.html` Beranda, `koleksi.html`, `about.html` Tentang Kami, `contact.html` Kontak
- `site.css` satu stylesheet untuk keempat halaman (token desain sudah digabung di dalamnya)
- `nav.js` menu hamburger mobile, `image-slot.js` penempatan foto produk
- `image-slots.state.json` posisi crop foto
- `img/` semua gambar (nama file ASCII, aman untuk URL)
- `.nojekyll` mencegah GitHub memproses ulang file

## Catatan
- Font dimuat dari Google Fonts (butuh internet). Untuk offline, unduh Playfair Display + Open Sans dan tambahkan `@font-face` di `site.css`.
- Semua path bersifat relatif, jadi situs bekerja baik di root domain maupun di subfolder repo.
