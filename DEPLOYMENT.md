# 🚀 GitHub'a Yükleme Rehberi

Bu rehber, Neural Notes projesini GitHub'da repository oluşturup yüklemek için adım adım talimatları içerir.

## 📋 Ön Hazırlık

✅ Git repository'si başlatıldı  
✅ Tüm dosyalar commit edildi  
✅ Proje yerel olarak hazır  

## 🌐 GitHub Repository Oluşturma

### Adım 1: GitHub'da Yeni Repository Oluştur

1. **GitHub.com**'a git ve giriş yap
2. Sağ üst köşedeki **"+"** butonuna tıkla
3. **"New repository"** seç

### Adım 2: Repository Ayarları

**Repository bilgileri:**
- **Repository name:** `neural-notes`
- **Description:** `🧠 A simple, elegant markdown-based note-taking app inspired by Obsidian`
- **Visibility:** Public (önerilen) veya Private
- **Initialize repository:** ❌ **İşaretleme!** (zaten yerel repo var)

### Adım 3: Repository'yi Oluştur

"Create repository" butonuna tıkla.

## 📤 Kodu GitHub'a Yükle

GitHub repository'sini oluşturduktan sonra, terminalde şu komutları çalıştır:

```bash
# Remote repository'yi ekle
git remote add origin https://github.com/KULLANICI_ADIN/neural-notes.git

# Ana branch'i main olarak ayarla (opsiyonel)
git branch -M main

# Kodu GitHub'a push et
git push -u origin main
```

**Not:** `KULLANICI_ADIN` yerine kendi GitHub kullanıcı adınızı yazın.

## 🔧 Alternatif: SSH ile Yükleme

Eğer SSH key'iniz varsa:

```bash
git remote add origin git@github.com:KULLANICI_ADIN/neural-notes.git
git branch -M main
git push -u origin main
```

## 📱 GitHub Pages ile Deploy (Opsiyonel)

Projeyi canlıya almak için GitHub Pages kullanabilirsiniz:

1. Repository sayfasına git
2. **Settings** tab'ına tıkla
3. Sol menüden **Pages** seç
4. **Source** kısmından **"Deploy from a branch"** seç
5. **Branch** olarak **"main"** seç
6. **Save** butonuna tıkla

Birkaç dakika sonra projeniz şu adreste yayında olacak:
`https://KULLANICI_ADIN.github.io/neural-notes/`

## 📊 Repository İstatistikleri

İlk commit'te eklenen dosyalar:
- `index.html` - Ana uygulama dosyası
- `styles.css` - Tema ve responsive tasarım
- `script.js` - Tüm JavaScript functionality
- `README.md` - Proje dokümantasyonu
- `.gitignore` - Git ignore kuralları

**Toplam kod satırı:** ~1600+ satır  
**Dosya sayısı:** 5 dosya  
**Teknik stack:** Vanilla HTML, CSS, JavaScript  

## 🏷️ İlk Release Tag Oluşturma

Release tag oluşturmak için:

```bash
git tag -a v1.0.0 -m "🎉 Neural Notes v1.0.0 - Initial Release"
git push origin v1.0.0
```

Sonra GitHub'da **Releases** seçeneğine gidip release notları ekleyebilirsiniz.

## 🔗 Yararlı Linkler

- [GitHub CLI](https://cli.github.com/) - Gelecekte terminal'den repo oluşturmak için
- [GitHub Pages](https://pages.github.com/) - Ücretsiz hosting
- [Git Documentation](https://git-scm.com/doc) - Git komutları referansı

---

**Başarılar! 🎉 Projeniz GitHub'da yayında olacak!** 