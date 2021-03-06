import { Project } from './project';

export const PROJECTS: Project[] = [
	{
		title: 'MWS-Restaurant',
		img: 'assets/img/dist/MWS-Restaurant.png',
		alt: 'MWS-Restaurant',
		description: 'This was my project for Udacity\'s Mobile Web Specialist \
		Nanodegree, which I was granted access to through the Grow with Google \
		Udacity Challenge Scholarship. It is a Progressive Web App that serves \
		information on various restaurants in New York City. The data about \
		the restaurants is being served by a sails server which was provided to \
		us and which I hosted on Heroku for use with my project.',
		link: 'https://sleepy-wescoff-ade04c.netlify.com',
		github: 'https://github.com/jethridge13/mws-restaurant'
	},
	{
		title: 'Jethridge.com',
		description: 'That\'s right, I made this too! This site was actually \
		my way of teaching myself Angular. After completing the Angular tutorial, \
		I wanted to build something to help reinforce my understanding, so I made \
		this!',
		github: 'https://github.com/jethridge13/jethridge-src'
	},
	{
		title: 'MWS Study Guide',
		description: 'I made this study guide when I was studying for Google\'s \
		Mobile Web Specialist Certification exam. It contains all of the links \
		that Google provides in their own study guide along with my notes on \
		each of them.',
		link: 'https://github.com/jethridge13/MWS-Certification-Study-Guide',
		github: 'https://github.com/jethridge13/MWS-Certification-Study-Guide'
	}
];
