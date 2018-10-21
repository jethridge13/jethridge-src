import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../project';
import { SectionServiceService } from '../section-service.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-project-card',
	templateUrl: './project-card.component.html',
	styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

	@Input() project: Project;
	faGithub = faGithub;

	constructor(private sectionService: SectionServiceService) { }

	ngOnInit() {

	}

}
