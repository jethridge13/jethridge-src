import { Observable, of } from 'rxjs';

import { Section } from './section';
import { Project } from './project';
import { ContactCard } from './contact-card';
import { Injectable } from '@angular/core';
import { SECTIONS } from './dev-sections';
import { PROJECTS } from './dev-projects';
import { CONTACTCARDS } from './dev-contact-cards';

@Injectable({
	providedIn: 'root'
})
export class SectionServiceService {

	getSections(): Observable<Section[]> {
		return of(SECTIONS);
	}

	getProjects(): Observable<Project[]> {
		return of(PROJECTS);
	}

	getContactCards(): Observable<ContactCard[]> {
		return of(CONTACTCARDS);
	}

	constructor() { }
}
