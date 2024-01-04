import { Component } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';
import { FadeInDirective } from '../directives/fade-in.directive';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ResumeComponent, ScrollAnimationDirective, FadeInDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent { }
