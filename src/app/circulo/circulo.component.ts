import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Circulo } from '../models/Circulo';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  standalone: true,
  imports: [FormsModule, IonicModule, CommonModule],
})
export class CirculoComponent {
  radio: number = 0; 
  resultado: number | null = null;

  calcular() {
    if (this.radio && this.radio > 0) {
      const circulo = new Circulo(this.radio);
      this.resultado = circulo.calcularPerimetro();
    } else {
      this.resultado = null;
    }
  }
}
