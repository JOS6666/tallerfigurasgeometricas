import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  standalone: true,
  imports: [FormsModule, IonicModule, CommonModule],
})
export class TrianguloComponent {
  ladoA: number = 0;
  ladoB: number = 0;
  ladoC: number = 0;
  resultado: number | null = null;

  calcular() {
    const a = Number(this.ladoA);
    const b = Number(this.ladoB);
    const c = Number(this.ladoC);

    if (a > 0 && b > 0 && c > 0) {
      this.resultado = a + b + c; 
    } else {
      this.resultado = null;
    }
  }
}
