import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { PictureComponent } from './picture/picture.component';
import { FooterComponent } from './footer/footer.component';
import { HamburgerNavComponent } from './hamburger-nav/hamburger-nav.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		CustomHeaderComponent,
		PictureComponent,
		FooterComponent,
		HamburgerNavComponent,
		ProjectCardComponent,
		ContactCardComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		FontAwesomeModule,
		RouterModule.forRoot([]),
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
