import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    standalone: true, // Standalone component olduğunu belirtiyoruz. Standalone component'ler modül tanımlamasına ihtiyaç duymazlar.
    selector: 'app-about', // Bu component'in HTML'de kullanılacağı etiket adı
    templateUrl: './about.component.html', // Component'in HTML şablon dosyasının yolu
    providers: [], // Providers dediğimiz kısımda bu component'in ihtiyaç duyduğu servisleri tanımlayabiliriz
    imports: [], // Imports ise bu component'in kullanacağı diğer bileşenleri veya modülleri belirtir
    encapsulation: ViewEncapsulation.None // Bu ayar, stil kapsülleme stratejisini belirler.
})

export class AboutComponent {}