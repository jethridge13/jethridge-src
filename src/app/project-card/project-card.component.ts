import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

import { Project } from '../project';
import { SectionServiceService } from '../section-service.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-project-card',
	templateUrl: './project-card.component.html',
	styleUrls: ['./project-card.component.scss'],
	animations: [
		trigger('slideInOut', [
			transition('closed => open', [
				style({transform: 'translateY(-100%)'}),
				animate('200ms ease-in'), style({transform: 'translateY(0%)'})
			]),
			transition('open => closed', [
				animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
			])
		])
	]
})
export class ProjectCardComponent implements OnInit {

	@Input() project: Project;
	viewMoreText = 'View Details';
	faGithub = faGithub;
	detailsVisible = false;
	detailsState = 'closed';

	constructor(private sectionService: SectionServiceService) { }

	ngOnInit() {

	}

	toggleDetails(): void {
		if (this.detailsState === 'closed') {
			this.detailsState = 'open';
		} else {
			this.detailsState = 'closed';
		}
	}

	animationStart(event: any): void {
		console.log(this.detailsState);
		if (event.toState === 'open') {
			this.detailsVisible = true;
			this.viewMoreText = 'Hide Details';
		}
	}

	animationDone(event: any): void {
		if (event.toState === 'closed') {
			this.detailsVisible = false;
			this.viewMoreText = 'View Details';
		}
	}

}
