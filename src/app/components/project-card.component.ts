import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <article class="card">
      <div class="card-body">
        <h3>{{ project.title }}</h3>
        <p>{{ project.summary }}</p>
        <p class="meta">{{ project.stack.join(', ') }}</p>
      </div>
      <div class="card-actions">
        @if (project.liveUrl) {
          <a class="btn btn-sm" [href]="project.liveUrl" target="_blank" rel="noopener">Live Site</a>
        }
        @if (project.repoUrl) {
          <a class="btn btn-sm" [href]="project.repoUrl" target="_blank" rel="noopener">Code</a>
        }
      </div>
    </article>
  `,
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}