import { Component } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private db: Firestore) {
    this.estados = { 'LED1': false, 'LED2': false, 'LED3': false };
  }

  estados: { [key: string]: boolean };

  async toggleEstado(led: string) {
    this.estados[led] = !this.estados[led];
    await this.actualizarEstado(led, this.estados[led]);
  }

  todosEncendidos(): boolean {
    return this.estados['LED1'] && this.estados['LED2'] && this.estados['LED3'];
  }

  async toggleTodos() {
    const nuevoEstado = !this.todosEncendidos();
    Object.keys(this.estados).forEach(async (led) => {
      this.estados[led] = nuevoEstado;
      await this.actualizarEstado(led, nuevoEstado);
    });
  }

  async actualizarEstado(led: string, encender: boolean) {
    const referenciaLED = doc(this.db, 'controlLED', led);
    await setDoc(referenciaLED, { encender });
  }
}
