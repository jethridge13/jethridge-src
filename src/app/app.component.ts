import { Component } from '@angular/core';

import { Section } from './section';
import { SectionServiceService } from './section-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'jethridge';
	sections: Section[];

	constructor(private sectionService: SectionServiceService) { }

	ngOnInit() {
		this.getSections();
	}

	getSections(): void {
		this.sectionService.getSections().subscribe(sections => {
			this.sections = sections;
		});
	}
}
