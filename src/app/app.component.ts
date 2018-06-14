import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg = 'Учимся Vue а за одно и css с js';
  menu = [
    { example: 1, text: 'Hello World!' },
    { example: 2, text: 'Динамически связанные свойства' },
    { example: 3, text: 'Условия v-if' },
    { example: 4, text: 'Циклы v-for' },
    { example: 5, text: 'События v-on' },
    { example: 6, text: 'Cвязывание элементов форм v-model' },
    { example: 7, text: 'Компоненты' },
    { example: 8, text: 'CRUD' },
    { example: 9, text: 'Часы' }
  ];
}
