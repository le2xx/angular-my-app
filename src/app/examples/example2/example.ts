import { Component } from '@angular/core';
@Component({
    selector: 'app-ex-2',
    templateUrl: './example.html',
    styleUrls: ['./example.css']
})
export class Example2Component {
    message = 'Вы загрузили эту страницу в: ' + new Date().toLocaleString();
}
