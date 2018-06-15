import { Input, Component } from '@angular/core';
@Component({
    selector: 'app-todoitem',
    templateUrl: './todoitem.html',
    styleUrls: ['./todoitem.css']
})
export class TodoItemComponent {
    @Input() item;
}
