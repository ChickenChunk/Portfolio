import { Component, Input } from '@angular/core';
import { Info } from '../../models/info';

@Component({
  selector: 'app-info-card',
  standalone: true,
  template: `
    <article class="card">
    <div class="card-body">
      <h3 class="title">
        {{ info.title }}
        <img class="icon-inline" [src]="info.iconSrc" alt="" loading="lazy" decoding="async" />
      </h3>
      <p>{{ info.summary }}</p>
    </div>
    <div class="card-actions">
      @if (info.linkUrl) {
        <a class="btn btn-sm" [href]="info.linkUrl" target="_blank" rel="noopener">Link</a>
      }
    </div>
  </article>
  `,
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {
  @Input({ required: true }) info!: Info;
}