import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { SectionServiceService } from '../section-service.service';

@Component({
	selector: 'app-project-card',
	templateUrl: './project-card.component.html',
	styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

	projects: Project[];

	constructor(private sectionService: SectionServiceService) { }

	ngOnInit() {
		this.getProjects();
	}

	getProjects(): void {
		this.sectionService.getProjects().subscribe(projects => {
			this.projects = projects;
		});
	}

}
