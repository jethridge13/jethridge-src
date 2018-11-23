import { Component, OnInit } from '@angular/core';

import { Section } from './section';
import { Project } from './project';
import { ContactCard } from './contact-card';

import { SectionServiceService } from './section-service.service';
import { PromptUpdateService } from './prompt-update.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'jethridge';
	sections: Section[];
	projects: Project[];
	contactCards: ContactCard[];

	// TODO Abstract this away from this component for better reusability
	// Education
	stonyBrookCard: Project = {title: 'Stony Brook University',
		img: './assets/img/dist/SB.jpg',
		subtitles: ['Bachelors of Science in Computer Science',
		'Class of 2016'],
		description: 'What\'s a Seawolf? I\'m a Seawolf! My time at Stony Brook \
		was some of the best 4 years of my life. During my time there, I gained \
		the knowledge and skills to be a robust and dedicated programmer.',
		details: ['Stony Brook was my home for 4 years. I was admitted \
		directly into the Computer Science major. In the introductory \
		track, I leanred Java and used it to learn about data structures \
		and design patterns. I also learned about system fundamentals \
		using MIPS and C. Other classes I took include programming \
		language fundamentals using Python and frontend engineering \
		which used HTML, CSS, and JavaScript. Other electives I took \
		include computer music and artificial intelligence.',
		'I also studied many of the theoretical aspects of computer \
		science such as graphy theory, combinatorics, discrete \
		mathematics, and algorithms. ']
	};
	growWithGoogleCard: Project = {title: 'Grow with Google Udacity Challenge',
		img: './assets/img/dist/GWG.jpg',
		subtitles: ['Accepted Phase One: January 10, 2018',
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
	MWSCard: Project = {title: 'Mobile Web Specialist Nanodegree',
		img: './assets/img/dist/mws-nanodegree.svg',
		subtitles: ['Awarded September 2, 2018'],
		description: 'As part of the Grow with Google Udacity Challenge, I \
		was given the opportunity to complete Udacity\'s Mobile Web Specialist \
		nanodegree. The nanodegree included three projects and covered several \
		topics related to building responsive progressive web apps.',
		details: ['Udacity\'s Mobile Web Specialist Nanodegree covers \
		various topics related to building progressive web apps. The \
		topics covered include performance, build tools, offline \
		behavior, accessibility, and responsive design. To obtain the \
		nanodegree, I had to demonstrate my understanding of the topics \
		by completing various projects. There were three projects that \
		resulted in one final product at the end, each project building \
		on the last. You can see my final product in the Products section \
		below!']
	};

	// Work
	KMCard: Project = {title: 'Konica Minolta Business Solutions',
		img: './assets/img/dist/KM.png',
		subtitles: ['Software Engineer', 'April 2017 - Present'],
		description: 'I work as the primary web app developer for the \
		Konica Minolta MarketPlace. My responsibilities include developing, \
		improving, and supporting over 30 of our web apps. I am responsible \
		for understanding the full stack of each of these apps and planning on \
		how to add new features to them.',
		details: ['In my job, I am trusted to work on and understand the \
		full stack of each of our original web apps on the Konica Minolta \
		MarketPlace. These apps are used as various business solutions \
		for Konica Minolta\'s series of MultiFunction Printers (MFPs). \
		They cover several different technologies and make use of various \
		web APIs such as the Google Drive API and Microsoft\'s OneDrive API. \
		They also include various file transfer technologies such as SMB, \
		FTP, and WebDAV.',
		'I work directly on each app. It is my responsibility to ensure that \
		each app is compatible with as many of our different types of machines \
		as possible. Part of this has allowed me to work directly with our \
		parent company in Japan as they develop new machines. Additionally, \
		I have worked on documentation and code examples for third party \
		developers on how to get their app to work on our MFPs.']
	};

	// Technologies
	AngularCard: Project = {title: 'Angular',
		icon: './assets/img/dist/angular.svg'
	};
	CSSCard: Project = {title: 'CSS',
		icon: './assets/img/dist/CSS.svg'
	};
	GulpCard: Project = {title: 'Gulp',
		icon: './assets/img/dist/gulp.svg'
	};
	HTMLCard: Project = {title: 'HTML5',
		icon: './assets/img/dist/HTML5.svg'
	};
	JSCard: Project = {title: 'JavaScript',
		icon: './assets/img/dist/JS.svg'
	};
	NodeCard: Project = {title: 'NodeJS',
		icon: './assets/img/dist/node.svg'
	};
	PWACard: Project = {title: 'PWA',
		icon: './assets/img/dist/PWA.png'
	};
	PythonCard: Project = {title: 'Python',
		icon: './assets/img/dist/python.svg'
	};
	SassCard: Project = {title: 'Sass',
		icon: './assets/img/dist/sass.svg'
	};
	TSCard: Project = {title: 'TypeScript',
		icon: './assets/img/dist/ts.svg'
	};

	education: Project[] = [this.stonyBrookCard, this.growWithGoogleCard,
	this.MWSCard];
	work: Project[] = [this.KMCard];
	technologies: Project[] = [this.AngularCard, this.CSSCard,
	this.GulpCard, this.HTMLCard, this.JSCard, this.NodeCard, this.PWACard,
	this.PythonCard, this.SassCard, this.TSCard];

	constructor(private sectionService: SectionServiceService,
		private promptService: PromptUpdateService) { }

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
		});
	}
}
