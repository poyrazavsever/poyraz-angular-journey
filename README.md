<div align="center">
  <img src="./public/logo.png" alt="Angular Logo" width="200"/>
  
  # Angular Öğrenme Günlüğü
  
  <p>Bu repository, Angular öğrenme sürecimde tuttuğum notları, yaptığım uygulamaları ve öğrendiğim konuları içerir.</p>
  
  [![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
</div>

---

## İçindekiler

- [Proje Hakkında](#proje-hakkında)
- [Klasör Yapısı](#klasör-yapısı)
- [Öğrenme Yol Haritası](#öğrenme-yol-haritası)
- [Başlangıç](#başlangıç)
- [Konu Başlıkları](#konu-başlıkları)
  - [00 - Roadmap](#00---roadmap)
  - [01 - Temel Konular](#01---temel-konular)
  - [02 - Components](#02---components)
  - [03 - Services & Dependency Injection](#03---services--dependency-injection)
  - [04 - Routing](#04---routing)
  - [05 - Forms](#05---forms)
- [Gereksinimler](#gereksinimler)
- [Kurulum](#kurulum)
- [Katkıda Bulunma](#katkıda-bulunma)
- [İletişim](#iletişim)

---

## Proje Hakkında

Bu repository, Angular framework'ünü sıfırdan öğrenme sürecimde tuttuğum kişisel bir öğrenme günlüğüdür. Her konu için detaylı notlar aldım ve pratik yapmak için küçük uygulamalar geliştirdim.

**Amaç:**

- Angular'ın temel ve ileri seviye özelliklerini öğrenmek
- Her konu için anlaşılır notlar ve örnekler oluşturmak
- Öğrenilen konuları pratik uygulamalarla pekiştirmek
- İleride referans olarak kullanılabilecek bir kaynak oluşturmak

**Kitlesi:**

- Angular öğrenmeye yeni başlayanlar
- Konuları tekrar etmek isteyenler
- Hızlıca Angular kavramlarına göz atmak isteyenler

---

## Klasör Yapısı

```
angular-learning/
├── 00 - roadmap/              # Angular öğrenme yol haritası
├── 01 - basics/               # Temel kavramlar ve ilk uygulama
│   ├── 00 - spa.mdx          # Single Page Application kavramı
│   ├── 01 - typescript.mdx   # TypeScript temelleri
│   ├── 02 - node.mdx         # Node.js ve npm
│   ├── 03 - angular.mdx      # Angular'a giriş
│   ├── 04 - binding.mdx      # Data binding türleri
│   └── first-app/            # İlk Angular uygulaması
├── 02-components/             # Component yapısı ve kullanımı
├── 03-services-di/            # Services ve Dependency Injection
├── 04-routing/                # Angular Routing
├── 05-forms/                  # Template-driven ve Reactive Forms
└── public/                    # Statik dosyalar (görseller vb.)
```

---

## Öğrenme Yol Haritası

Bu repository, aşağıdaki öğrenme yol haritasını takip eder:

1. **Temel Kavramlar** - Web geliştirme ve Angular'a hazırlık
2. **Angular Temelleri** - Framework'e giriş ve ilk uygulama
3. **Components** - Bileşen tabanlı mimari
4. **Services & DI** - Servisler ve bağımlılık enjeksiyonu
5. **Routing** - Sayfa yönlendirme ve navigasyon
6. **Forms** - Kullanıcı form işlemleri

---

## Başlangıç

Bu repository'deki notları ve uygulamaları incelemek için aşağıdaki adımları takip edebilirsiniz.

### Gereksinimler

- **Node.js** (v18 veya üzeri)
- **npm** (v9 veya üzeri)
- **Angular CLI** (v18 veya üzeri)
- Bir kod editörü (VS Code önerilir)

### Kurulum

1. Repository'yi klonlayın:

```bash
git clone https://github.com/poyrazavsever/poyraz-angular-journey.git
cd angular-learning
```

2. Angular CLI'yi global olarak yükleyin (eğer yüklü değilse):

```bash
npm install -g @angular/cli
```

3. Herhangi bir projeye gitmek için:

```bash
cd "01 - basics/first-app"
npm install
ng serve
```

4. Uygulamayı tarayıcıda açın:

```
http://localhost:4200
```

---

## Konu Başlıkları

### 00 - Roadmap

Angular öğrenme sürecinde takip edilecek yol haritası ve planlama.

**İçerik:**

- Öğrenme planı
- Hedefler ve kilometre taşları
- Kaynak önerileri

---

### 01 - Temel Konular

Angular'a başlamadan önce bilmesi gereken temel kavramlar ve ilk uygulama.

**İçerik:**

#### SPA (Single Page Application)

- SPA nedir ve nasıl çalışır?
- Geleneksel web uygulamaları ile farkları
- Avantajları ve dezavantajları

#### TypeScript

- TypeScript'e giriş
- JavaScript'ten farkları
- Tip sistemleri ve arayüzler
- Modern JavaScript özellikleri

#### Node.js & npm

- Node.js nedir?
- npm paket yöneticisi
- package.json yapısı
- Bağımlılık yönetimi

#### Angular

- Angular nedir?
- Angular CLI kurulumu
- İlk Angular projesi oluşturma
- Proje yapısı ve dosyalar

#### Data Binding

- Binding türleri:
  - **Interpolation** - Veriyi şablonda gösterme
  - **Property Binding** - HTML özelliklerine veri bağlama
  - **Event Binding** - Kullanıcı olaylarını yakalama
  - **Two-Way Binding** - Çift yönlü veri bağlama

**Proje:**

- `first-app/` - İlk Angular uygulaması
  - Component yapısı
  - Data binding örnekleri
  - Basit navigasyon

---

### 02 - Components

Angular'ın temel yapı taşı olan component'ler.

**Planlanmış İçerik:**

- Component oluşturma ve kullanma
- Component lifecycle hooks
- Component iletişimi (Input/Output)
- ViewChild ve ContentChild
- Dynamic components

---

### 03 - Services & Dependency Injection

Uygulama mantığını paylaşmak ve yönetmek için servisler.

**Planlanmış İçerik:**

- Service nedir?
- Dependency Injection kavramı
- Service oluşturma ve kullanma
- Providerslar ve scope'lar
- HTTP servisleri

---

### 04 - Routing

Angular uygulamalarında sayfa yönlendirme.

**Planlanmış İçerik:**

- Router yapılandırması
- Route parametreleri
- Child routes
- Route guards
- Lazy loading

---

### 05 - Forms

Kullanıcı girişlerini yönetme.

**Planlanmış İçerik:**

- Template-driven forms
- Reactive forms
- Form validasyonu
- Custom validators
- Dynamic forms

---

## Notlar Hakkında

Tüm notlar `.mdx` formatında yazılmıştır ve aşağıdaki yapıya sahiptir:

```mdx
---
title: "Konu Başlığı"
description: "Konu açıklaması"
date: "2025-12-05"
author: "Poyraz Avsever"
level: "beginner|intermediate|advanced"
category: "Kategori"
tags:
  - etiket1
  - etiket2
---

### İçerik

...
```

Bu yapı sayesinde notlar:

- Organize ve düzenli
- Kolayca filtrelenebilir
- Tarihsel olarak takip edilebilir
- Seviye bazında gruplanabilir

---

## Katkıda Bulunma

Bu bir kişisel öğrenme repository'si olsa da, önerilerinize ve katkılarınıza açığım!

1. Hata bildirimi için issue açabilirsiniz
2. Düzeltme önerileri için pull request gönderebilirsiniz
3. Yeni konu önerileri sunabilirsiniz

**Dikkat:** Lütfen katkılarınızda şu kurallara uyun:

- Türkçe dil kurallarına dikkat edin
- Kod örneklerini test edin
- Anlaşılır ve açıklayıcı olun
- Mevcut yapıyı koruyun

---

## İletişim

**Yazar:** Poyraz Avsever

- GitHub: [@poyrazavsever](https://github.com/poyrazavsever)
- Repository: [poyraz-angular-journey](https://github.com/poyrazavsever/poyraz-angular-journey)

---

<div align="center">
  <p>Bu repository ile birlikte Angular öğrenme yolculuğuma devam ediyorum!</p>
  <p>Başarılı kodlamalar!</p>
</div>
