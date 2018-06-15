import { Component } from '@angular/core';
@Component({
    selector: 'app-ex-4',
    templateUrl: './example.html',
    styleUrls: ['./example.css']
})
export class Example4Component {
    todos = [
        { name: 'Бананы', price: 10 },
        { name: 'Апельсины', price: 15 },
        { name: 'Мандарины', price: 20 },
        { name: 'Киви', price: 34 },
        { name: 'Картошка', price: 21 }
    ];
}
