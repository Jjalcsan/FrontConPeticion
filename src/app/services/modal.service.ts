import { Injectable } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalLoginComponent } from '../landing/modal-login/modal-login.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalRef: MdbModalRef<ModalLoginComponent> | null = null;

  constructor() { }

  openModal(){}

  closeModal(){}

  confirm(){}
}
