import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  resultado;
  txir;

  calcir(formu) {
    const sal = formu.value.sal;
    
    if (sal <= 2000) {
      this.txir = 0;
    } else if (2000 < sal && sal <= 5000) {
      this.txir = 10;
    } else {
      this.txir = 15;
    }

    this.resultado = parseFloat(sal) * this.txir / 100;
  }

}
