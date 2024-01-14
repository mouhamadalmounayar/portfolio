
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { zoomOut } from '../animations/contactPageAnimations';

import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations : [zoomOut]
})
export class ContactComponent {
  showElement = true;
  ngOnInit() {
    this.showElement = false;
  }
  constructor(private formBuilder : FormBuilder , private contactService : ContactService){}
  checkoutForm = this.formBuilder.group({
    name : '',
    email : '',
    message : ''
  })
  onSubmit() : void{
    if (this.checkoutForm.valid){
        this.contactService.submitForm(this.checkoutForm.value).subscribe(
          (response) => {
            console.log(response)
            alert(response.message)
          }
        )
      }
    }
}
