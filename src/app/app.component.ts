import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
<<<<<<< Updated upstream
=======
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< Updated upstream
  imports: [CommonModule, RouterOutlet, HeaderComponent],
=======
  imports: [CommonModule, RouterOutlet, HeaderComponent, HomeComponent, ResumeComponent],
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
