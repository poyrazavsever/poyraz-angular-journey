import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe, CommonModule } from '@angular/common';

// Her ayın ödeme detaylarını tutan interface
interface PaymentDetail {
  month: number; // Ay numarası
  payment: number; // Aylık ödeme tutarı
  principal: number; // Anapara ödemesi
  interest: number; // Faiz ödemesi
  remainingBalance: number; // Kalan borç
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, DecimalPipe, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Başlık
  protected readonly title = signal('💰 Kredi Hesaplayıcı');

  // Kullanıcı girdileri
  loanAmount = signal<number>(100000); // Kredi tutarı
  interestRate = signal<number>(1.5); // Aylık faiz oranı (%)
  loanTerm = signal<number>(12); // Vade (ay)

  // Hesaplanan özet değerler
  monthlyPayment = signal<number>(0); // Aylık ödeme
  totalPayment = signal<number>(0); // Toplam ödeme
  totalInterest = signal<number>(0); // Toplam faiz

  // Aylık ödeme detayları tablosu
  paymentSchedule = signal<PaymentDetail[]>([]);

  // Kredi hesaplama fonksiyonu
  calculateLoan() {
    const principal = this.loanAmount();
    const monthlyRate = this.interestRate() / 100;
    const months = this.loanTerm();

    if (principal > 0 && monthlyRate >= 0 && months > 0) {
      if (monthlyRate === 0) {
        // Faiz oranı 0 ise basit hesaplama
        const monthly = principal / months;
        this.monthlyPayment.set(monthly);
        this.totalPayment.set(principal);
        this.totalInterest.set(0);
        this.generatePaymentSchedule(principal, monthly, 0, months);
      } else {
        // Aylık ödeme formülü: M = P * (r * (1 + r)^n) / ((1 + r)^n - 1)
        const x = Math.pow(1 + monthlyRate, months);
        const monthly = (principal * monthlyRate * x) / (x - 1);
        const total = monthly * months;
        const interest = total - principal;

        this.monthlyPayment.set(monthly);
        this.totalPayment.set(total);
        this.totalInterest.set(interest);
        this.generatePaymentSchedule(principal, monthly, monthlyRate, months);
      }
    }
  }

  // Aylık ödeme tablosunu oluştur
  generatePaymentSchedule(
    principal: number,
    monthlyPayment: number,
    monthlyRate: number,
    months: number
  ) {
    const schedule: PaymentDetail[] = [];
    let remainingBalance = principal;

    for (let month = 1; month <= months; month++) {
      // Bu aydaki faiz tutarı
      const interestPayment = remainingBalance * monthlyRate;
      // Bu aydaki anapara ödemesi
      const principalPayment = monthlyPayment - interestPayment;
      // Ödeme sonrası kalan borç
      remainingBalance = remainingBalance - principalPayment;

      // Son ayda kalan borç negatif olmamalı (yuvarlama hatası için)
      if (month === months && remainingBalance < 0) {
        remainingBalance = 0;
      }

      schedule.push({
        month: month,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        remainingBalance: remainingBalance,
      });
    }

    this.paymentSchedule.set(schedule);
  }

  // Input değiştiğinde hesapla
  onInputChange() {
    this.calculateLoan();
  }

  // Component ilk yüklendiğinde hesapla
  ngOnInit() {
    this.calculateLoan();
  }
}
