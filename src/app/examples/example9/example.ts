import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
    selector: 'app-ex-9',
    templateUrl: './example.html',
    styleUrls: ['./example.css']
})
export class Example9Component {
    hours = null;
    minutes = null;
    seconds = null;

    timer() {
        const time = new Date();
        this.hours = time.getHours();
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();
        // tslint:disable-next-line:no-unused-expression
        this.hours < 10 ? this.hours = '0' + this.hours : this.hours;
        // tslint:disable-next-line:no-unused-expression
        this.minutes < 10 ? this.minutes = '0' + this.minutes : this.minutes;
        // tslint:disable-next-line:no-unused-expression
        this.seconds < 10 ? this.seconds = '0' + this.seconds : this.seconds;
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        setInterval(() => this.timer(), 1000);
    }
}
