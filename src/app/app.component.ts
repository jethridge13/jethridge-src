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
		details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit sit amet nisl sed lacinia. Sed tempor, magna a suscipit molestie, nunc dolor lobortis arcu, vitae tempor magna purus ut tortor. Quisque sed nunc rutrum, viverra est ac, lobortis enim. Nullam feugiat augue mauris, ut venenatis arcu malesuada vel. Aenean hendrerit libero a turpis facilisis vestibulum. Aliquam magna mi, laoreet in odio eu, fringilla convallis lacus. Proin pellentesque, nunc bibendum bibendum semper, urna est ornare sapien, vitae pulvinar ante mi et dui.\n\nMorbi condimentum, velit non euismod mollis, nunc lacus scelerisque leo, eu elementum lacus nisi eget ipsum. Proin nisi velit, pellentesque tempus ultricies quis, interdum ac sem. Fusce gravida ligula non ante convallis pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis facilisis iaculis bibendum. Praesent sed gravida arcu. Donec sodales quis tellus eu convallis. Aenean ultricies aliquet dui id iaculis. In rhoncus dolor neque, at imperdiet ligula sodales nec. Nunc turpis ex, viverra id dignissim a, consequat id nisl. Nullam efficitur magna sapien, id pretium massa aliquet vitae. In euismod ullamcorper urna vel consequat. In id tellus arcu. Donec augue augue, porttitor consectetur iaculis sit amet, maximus et elit.'
	};
	growWithGoogleCard:Project = {title: 'Grow with Google Udacity Challenge',
		img:'./assets/img/GWG.jpg',
		subtitles:['Accepted Phase One: January 10, 2018',
			'Accepted Phase Two: April 17, 2018']
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
