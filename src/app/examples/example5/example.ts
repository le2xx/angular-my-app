import { Component } from '@angular/core';
@Component({
    selector: 'app-ex-5',
    templateUrl: './example.html',
    styleUrls: ['./example.css']
})
export class Example5Component {
    message = 'привет мир!';
    registr() {
        if (this.message === this.message.toLowerCase()) {
            this.message = this.message.toUpperCase();
            return;
          }
        this.message = this.message.toLowerCase();
        return;
    }
}
