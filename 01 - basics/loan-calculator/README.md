# Kredi Hesaplayıcı

Angular öğrenirken yaptığım basit ve öğretici bir kredi hesaplayıcı projesi.

## Özellikler

- **Kredi Hesaplama**: Kredi tutarı, faiz oranı ve vade süresine göre aylık ödeme hesaplama
- **Aylık Ödeme Tablosu**: Her ay için detaylı ödeme planı (anapara, faiz, kalan borç)
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu modern arayüz
- **Anında Güncelleme**: Değerler değiştikçe otomatik hesaplama

## Kullanılan Teknolojiler

- **Angular 21**: Component tabanlı yapı
- **TypeScript**: Tip güvenli kod
- **Signals**: Modern reactive programlama
- **FormsModule**: Two-way data binding
- **CSS3**: Modern gradient ve animasyonlar

## Nasıl Çalışır?

### Component Yapısı (`app.ts`)

```typescript
// Kullanıcı girdileri signals ile yönetilir
loanAmount = signal<number>(100000);
interestRate = signal<number>(1.5);
loanTerm = signal<number>(12);
```

### Hesaplama Mantığı

Aylık ödeme formülü:

```
M = P * (r * (1 + r)^n) / ((1 + r)^n - 1)
```

- M = Aylık ödeme
- P = Kredi tutarı (principal)
- r = Aylık faiz oranı
- n = Vade (ay sayısı)

### Ödeme Tablosu

Her ay için:

- **Faiz**: Kalan borç × Aylık faiz oranı
- **Anapara**: Aylık ödeme - Faiz
- **Kalan Borç**: Önceki kalan - Anapara

## Öğrenilen Konular

1. **Signals**: Angular'ın yeni reactive sistemi
2. **Two-way Binding**: `[(ngModel)]` kullanımı
3. **Pipes**: `DecimalPipe` ile sayı formatlama
4. **Component Lifecycle**: `ngOnInit` hook'u
5. **Interface**: TypeScript tip tanımları
6. **Array İşlemleri**: Tablo verisi oluşturma
7. **CSS Grid**: Responsive layout tasarımı

## Kurulum ve Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm start
```

Tarayıcıda `http://localhost:4200` adresine gidin.

## Proje Yapısı

```
src/
  app/
    app.ts          # Component mantığı
    app.html        # Template (HTML)
    app.css         # Stiller
    app.config.ts   # Uygulama yapılandırması
```

## Tasarım Özellikleri

- Gradient arka plan ve kartlar
- Hover efektleri
- Renkli sonuç kartları (mavi, pembe, turkuaz)
- Responsive grid layout
- Son satır vurgulaması (sarı arka plan)

---

**Not**: Bu proje öğrenme amaçlıdır. Gerçek kredi hesaplamaları için profesyonel araçlar kullanın.
