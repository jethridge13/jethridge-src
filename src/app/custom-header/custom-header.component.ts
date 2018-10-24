import { Component, OnInit } from '@angular/core';

import { HamburgerNavMenuService } from '../hamburger-nav-menu.service';

@Component({
	selector: 'app-custom-header',
	templateUrl: './custom-header.component.html',
	styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent implements OnInit {

	constructor(private menuService: HamburgerNavMenuService) { }

	ngOnInit() {
	}

	showHeaderLinks(): void {
		this.menuService.onMainEvent.emit();
	}

}
