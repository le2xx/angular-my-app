import { Component } from '@angular/core';
@Component({
    selector: 'app-ex-7',
    templateUrl: './example.html',
    styleUrls: ['./example.css']
})
export class Example7Component {
    fresh = [
        { id: 0, text: 'Мандарины' },
        { id: 1, text: 'Яблоки' },
        { id: 2, text: 'Бананы' }
    ];
}
