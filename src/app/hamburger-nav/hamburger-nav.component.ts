import { Component, OnInit } from '@angular/core';

import { Section } from '../section';
import { SectionServiceService } from '../section-service.service';
import { HamburgerNavMenuService } from '../hamburger-nav-menu.service';

@Component({
	selector: 'app-hamburger-nav',
	templateUrl: './hamburger-nav.component.html',
	styleUrls: ['./hamburger-nav.component.scss']
})
export class HamburgerNavComponent implements OnInit {

	sections: Section[];
	visible = false;

	constructor(private sectionService: SectionServiceService,
		private menuService: HamburgerNavMenuService) {
		menuService.onMainEvent.subscribe(() => {
			this.visible = !this.visible;
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
