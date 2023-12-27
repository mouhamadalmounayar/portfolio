import { Component, Input } from '@angular/core';
import { Project } from '../models/Project';
import { CommonModule, NgFor } from '@angular/common';
import { BsModalRef, BsModalService, ModalModule, ModalOptions} from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';



@Component({
  selector: 'app-card-projects',
  standalone: true,
  imports: [CommonModule, NgFor, ModalModule],
  templateUrl: './card-projects.component.html',
  styleUrl: './card-projects.component.css',
  providers : [BsModalService]
})
export class CardProjectsComponent {
  @Input() project = {} as Project;
  modalRef ?: BsModalRef;
  constructor(private modalService : BsModalService){
  }
  openModal() : void {
    const modalOptions : ModalOptions = {
      class : "modal-lg",
      initialState : {
        project : this.project
      }
    }
    this.modalRef = this.modalService.show(ProjectModalComponent, modalOptions) ;
  }

}


