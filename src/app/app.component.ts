import { Component } from '@angular/core';

import { Section } from './section';
import { Project } from './project';
import { ContactCard } from './contact-card';
import { SectionServiceService } from './section-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'jethridge';
	sections: Section[];
	projects: Project[];
	contactCards: ContactCard[];

	constructor(private sectionService: SectionServiceService) { }

	ngOnInit() {
		this.getProjects();
		this.getContactCards();
	}

	getSections(): void {
		this.sectionService.getSections().subscribe(sections => {
			this.sections = sections;
		});
	}

	getProjects(): void {
		this.sectionService.getProjects().subscribe(projects => {
			this.projects = projects;
		});
	}

	getContactCards(): void {
		this.sectionService.getContactCards().subscribe(contactCards => {
			this.contactCards = contactCards;
		})
	}
}
