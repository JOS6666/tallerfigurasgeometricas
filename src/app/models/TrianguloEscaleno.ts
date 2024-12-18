import { FiguraGeometrica } from './FiguraGeometrica';

export class TrianguloEscaleno extends FiguraGeometrica {
  constructor(
    private ladoA: number, 
    private ladoB: number, 
    private ladoC: number
) {
    super();
  }

  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}
