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
				opacity: '0'
			})),
			transition('open => closed', [
				animate('0.2s')
			]),
			transition('closed => open', [
				animate('0.2s')
			])
		])
	]
})
export class HamburgerNavComponent implements OnInit {

	sections: Section[];
	visible = true;
	state = 'closed';

	constructor(private sectionService: SectionServiceService,
		private menuService: HamburgerNavMenuService) {
		menuService.onMainEvent.subscribe(() => {
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

	// TODO Update this to hide the visibility of the dropdown
	// Functionality it works but creates accessibility issues and
	// tab order issues
	animationStart(event: any) {
		if (event.toState === 'open') {
			this.visible = true;
		}
	}

	animationDone(event: any) {
		if (event.toState === 'closed') {
			this.visible = false;
		}
	}

}
