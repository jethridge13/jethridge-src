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
		subtitles:['Bachelors of Science in Computer Science',
		'Class of 2016'],
		description: 'What\'s a Seawolf? I\'m a Seawolf! My time at Stony Brook \
		was some of the best 4 years of my life. During my time there, I gained \
		the knowledge and skills to be a robust and dedicated programmer.'
	};
	growWithGoogleCard:Project = {title: 'Grow with Google Udacity Challenge',
		img:'./assets/img/GWG.jpg',
		subtitles:['Accepted Phase One: January 10, 2018',
			'Accepted Phase Two: April 17, 2018'],
		description: 'I was selected and inducted into the Udacity Grow With \
		Google challenge based on my application in January, 2018. After my \
		performance and community participation in phase one, I was chosen to \
		move to stage two in April, 2018.',
		details: ['The Grow with Google Udacity Challenge scholarship was a \
		program ran with a collaboration between Udacity and Google. Out of over \
		100,000 applications, I was chosen to be part of a small pool with other \
		developers who had intermediate web development knowledge. In the first \
		phase, all scholars were broken into 4 separate categories pertaining to \
		their skill level and the topic for which they applied.',
		'During phase one, we were given access to a Slack group with all of \
		the other scholars in our skill and topic section. We were also given \
		access to 2 example lessons from Udacity\'s Mobile Web Specialist \
		nanodegree. In the 3 months of the program, we had to completely finish \
		the lessons. Of those that completed the lessons, those with the most \
		community interaction and those who helped their peers the most would \
		be selected to move on to phase two.',
		'I finished the lessons relatively early on and spent the rest of my \
		time helping others with the content. Additionally, I drove to \
		Camrbidge, Massachusetts for several tech meetups with my fellow \
		scholars. My dedication to helping others and community outreach is \
		what allowed me to be one of 1500 intermediate web scholars chosen \
		to move on to phase two.',
		'In phase two, I, along with 1500 of my fellow scholars, joined 3500 \
		other scholars who were chosen from the other 3 groups to move on to \
		phase two. Phase two lasted for 6 months. In that time, our goal was \
		to complete our respective nanodegree. I finished mine almost 2 full \
		months before the end of the program. Once I finished, I spent the rest \
		of my time interacting and helping the community like I did during phase \
		one.',
		'The entire opporunity was incredible and I feel very fortunate to have \
		been part of it. I\'d like to extend my thanks to both Udacity and \
		Google for selecting me for both phases.']
	};
	MWSCard:Project = {title: 'Mobile Web Specialist Nanodegree',
		img:'./assets/img/mws-nanodegree.svg',
		subtitles:['Awarded September 2, 2018'],
		description: 'As part of the Grow with Google Udacity Challenge, I \
		was given the opportunity to complete Udacity\'s Mobile Web Specialist \
		nanodegree. The nanodegree included three projects and covered several \
		topics related to building responsive progressive web apps.'
	};
	KMCard:Project = {title: 'Konica Minolta Business Solutions',
		img:'./assets/img/KM.png',
		subtitles:['Software Engineer', 'April 2017 - Present'],
		description: 'I work as the primary web app developer for the \
		Konica Minolta MarketPlace. My responsibilities include developing, \
		improving, and supporting over 30 of our web apps. I am responsible \
		for understanding the full stack of each of these apps and planning on \
		how to add new features to them.'
	}

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
