import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectCardComponent } from './components/project-card.component';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProjectCardComponent],
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
      repoUrl: 'https://github.com/ChickenChunk/Portfolio'
    },
    {
      title: 'AuthentiFreight',
      summary: 'A modern loadboard application for the trucking industry.',
      stack: ['Netlify', 'Typescript', 'React'],
      liveUrl: 'https://authentifreight.net/',
    },
  ]);
}