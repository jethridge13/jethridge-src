import { Component } from '@angular/core';

import { Section } from './section';
import { Project } from './project';
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

	constructor(private sectionService: SectionServiceService) { }

	ngOnInit() {
		this.getSections();
		this.getProjects();
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
}
