import { Component } from '@angular/core';
@Component({
    selector: 'app-ex-3',
    templateUrl: './example.html',
    styleUrls: ['./example.css']
})
export class Example3Component {
    message = 'Скрыть сообщение';
    seen = true;

    hide() {
        if (this.seen) {
            this.seen = false;
            this.message = 'Показать сообщение';
            return;
        }
        this.seen = true;
        this.message = 'Скрыть сообщение';
        return;
    }
}
