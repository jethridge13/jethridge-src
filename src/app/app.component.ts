import { Component } from '@angular/core';

import { Section } from './section';
import { Project } from './project';
import { ContactCard } from './contact-card';
import { SectionServiceService } from './section-service.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'jethridge';
	sections: Section[];
	projects: Project[];
	contactCards: ContactCard[];

	stonyBrookCard:Project = {title: 'Stony Brook University',
		img:'./assets/img/SB.jpg'};
	growWithGoogleCard:Project = {title: 'Grow with Google Udacity Challenge',
		img:'./assets/img/GWG.jpg'};
	MWSCard:Project = {title: 'Mobile Web Specialist Nanodegree',
		img:'./assets/img/mws-nanodegree.svg'};

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
