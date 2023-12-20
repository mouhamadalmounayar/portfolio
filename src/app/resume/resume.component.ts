import { Component } from '@angular/core';
import { Statistics } from './resume.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})

export class ResumeComponent {
  constructor(private service: Statistics) { }
  getProjects(): number {
    return this.service.getProjects();
  }
  getCertification(): number {
    return this.service.getCertification();
  }
  getProblems(): number {
    return this.service.getProblems();
  }
}
