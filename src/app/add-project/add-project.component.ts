import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {AddProjectService} from "./add-project.service";

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent {
  constructor(private formBuilder : FormBuilder , private service : AddProjectService){}
  onSubmit(){
    this.service.submit(this.checkoutForm.value).subscribe(response => {
      alert("Project added!")
    })
  }
  submitDelete() {
    this.service.submitDelete().subscribe(response => {
        alert("Project deleted")
    })
  }
  checkoutForm = this.formBuilder.group({
    id : '',
    name : '',
    description : '',
    tags : '',
    github : '',
    image : ''
  })
}
