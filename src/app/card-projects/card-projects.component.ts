import { Component, Input } from '@angular/core';
import { Project } from '../models/Project';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-card-projects',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './card-projects.component.html',
  styleUrl: './card-projects.component.css',
})
export class CardProjectsComponent {
  @Input() project = {} as Project;
}


