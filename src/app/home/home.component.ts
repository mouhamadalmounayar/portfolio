import { Component } from '@angular/core';
import { ResumeComponent } from '../resume/resume.component';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';
import { FadeInDirective } from '../directives/fade-in.directive';
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ResumeComponent, ScrollAnimationDirective, FadeInDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent { }
