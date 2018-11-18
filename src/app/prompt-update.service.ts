import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
	providedIn: 'root'
})
export class PromptUpdateService {

	// TODO Update this to prompt the user for SW updates
	promptUser(): boolean {
		return true;
	}

	constructor(updates: SwUpdate) {
		updates.available.subscribe(event => {
			// TODO Update this
			if (this.promptUser()) {
				updates.activateUpdate().then(() => {
					if (document && document.location) {
						document.location.reload();
					}
				});
			}
		});
	}
}
