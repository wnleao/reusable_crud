import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { ConfirmModalComponent } from 'src/app/shared/confirm-modal/confirm-modal.component';

enum AlertType {
  DANGER = 'danger', SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {
  constructor(
    private modalService: BsModalService
  ) { }

  private showAlert(message: string, type: AlertType, dismissTimeout?: number) {
    const bsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertType.DANGER);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertType.SUCCESS, 3000);
  }

  showConfirm(title: string, body: string, confirmTxt?: string, cancelTxt?: string) {
    const bsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.body = body;
    if (confirmTxt) {
      bsModalRef.content.confirmTxt = confirmTxt;
    }
    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }
    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }

}