import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HamburgerNavMenuService {

	onMainEvent: EventEmitter<void> = new EventEmitter();

	constructor() { }
}
