import { Observable, of } from 'rxjs';

import { Section } from './section';
import { Injectable } from '@angular/core';
import { SECTIONS } from './dev-sections';

@Injectable({
	providedIn: 'root'
})
export class SectionServiceService {

	getSections(): Observable<Section[]> {
		return of(SECTIONS);
	}

	constructor() { }
}
