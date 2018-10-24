import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Section } from '../section';
import { SectionServiceService } from '../section-service.service';
import { HamburgerNavMenuService } from '../hamburger-nav-menu.service';

@Component({
	selector: 'app-hamburger-nav',
	templateUrl: './hamburger-nav.component.html',
	styleUrls: ['./hamburger-nav.component.scss'],
	animations: [
		trigger('openClose', [
			state('open', style({
				opacity: '1'
			})),
			state('closed', style({
				opacity: '0.5'
			})),
			transition('open => closed', [
				animate('0s')
			]),
			transition('closed => open', [
				animate('0.2s')
			])
		])
	]
})
export class HamburgerNavComponent implements OnInit {

	sections: Section[];
	visible = false;
	state = 'closed';

	constructor(private sectionService: SectionServiceService,
		private menuService: HamburgerNavMenuService) {
		menuService.onMainEvent.subscribe(() => {
			this.visible = !this.visible;
			if (this.state === 'closed') {
				this.state = 'open';
			} else {
				this.state = 'closed';
			}
		});
	}

	ngOnInit() {
		this.getSections();
	}

	getSections(): void {
		this.sectionService.getSections().subscribe(sections => {
			this.sections = sections;
		});
	}

}
