import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { Project } from './models/project';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { Info } from './models/info';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectCardComponent, InfoCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Chase Allison\'s Portfolio');

  protected readonly projects = signal<readonly Project[]>([
    {
      title: 'Portfolio Website [This Site!]',
      summary: 'Angular + Azure Static Web Apps with CI/CD.',
      stack: ['Angular', 'TypeScript', 'Azure SWA'],
      liveUrl: 'https://happy-grass-0838a111e.1.azurestaticapps.net/',
      repoUrl: 'https://github.com/ChickenChunk/Portfolio',
      iconSrc: 'icons/Angular.jpg',
    },
    {
      title: 'AuthentiFreight',
      summary: 'A modern web-based loadboard application for the trucking industry.',
      stack: ['Netlify', 'Typescript', 'React, Supabase'],
      liveUrl: 'https://authentifreight.net/',  
      iconSrc: 'icons/AF_Logo.jpg',
    },
  ]);

  protected readonly infolist = signal<readonly Info[]>([
    {
      title: 'LinkedIn',
      summary: 'My professional profile. Feel free to connect with me!',
      linkUrl: 'https://www.linkedin.com/in/chase-allison-itm/',
      iconSrc: 'icons/linkedin.jpg',
    },
    {
      title: 'GitHub',
      summary: 'My GitHub profile.',
      linkUrl: 'https://github.com/ChickenChunk',
      iconSrc: 'icons/Github.png',
    },
  ]);
}