import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component({
    selector: 'person-contact',
    templateUrl: 'person-contact.component.html'
})

export class PersonContactComponent {
    @Input() email: String;
    @Input() phone: String;
    @Input() name: String;
}