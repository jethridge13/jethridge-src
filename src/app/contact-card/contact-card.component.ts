import { Component, OnInit, Input } from '@angular/core';

import { ContactCard } from '../contact-card';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

	@Input() card: ContactCard;

    constructor() { }

    ngOnInit() {
    }

}
