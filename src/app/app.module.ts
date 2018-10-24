import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { PictureComponent } from './picture/picture.component';
import { FooterComponent } from './footer/footer.component';
import { HamburgerNavComponent } from './hamburger-nav/hamburger-nav.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ContactCardComponent } from './contact-card/contact-card.component';

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
		FontAwesomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
