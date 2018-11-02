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
		img:'./assets/img/SB.jpg',
		subtitles:['Bachelors of Science in Computer Science'],
		details: ''
	};
	growWithGoogleCard:Project = {title: 'Grow with Google Udacity Challenge',
		img:'./assets/img/GWG.jpg',
		subtitles:['Accepted Phase One: January 10, 2018',
			'Accepted Phase Two: April 17, 2018'],
		description: 'I was selected and inducted into the Udacity Grow With \
		Google challenge based on my application in January, 2018. After my \
		performance and community participation in phase one, I was chosen to \
		move to stage two in April, 2018.'
	};
	MWSCard:Project = {title: 'Mobile Web Specialist Nanodegree',
		img:'./assets/img/mws-nanodegree.svg',
		subtitles:['Awarded September 2, 2018']
	};
	KMCard:Project = {title: 'Konica Minolta Business Solutions',
		img:'./assets/img/KM.png',
		subtitles:['Software Engineer', 'April 2017 - Present']}

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
