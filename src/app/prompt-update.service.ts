import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Injectable({
	providedIn: 'root'
})
export class PromptUpdateService {

	constructor(updates: SwUpdate, snackbar: MatSnackBar) {
		updates.available.subscribe(event => {
			const snack = snackbar.open('Update Available', 'Reload');

			snack
			.onAction().subscribe(() => {
				window.location.reload();
			});
		});
	}
}
