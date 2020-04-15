import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from '../../shared/alert-modal.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {

  serviceName;
  crudConfig;
  service;

  items$;
  title;

  constructor(
    private injector: Injector,
    private route: ActivatedRoute,
    private alertService: AlertModalService,
  ) { 
    this.serviceName = route.snapshot.parent.url[0].path;
    this.crudConfig = injector.get(this.serviceName); 
    this.service = injector.get(this.crudConfig.service);
    this.title = this.crudConfig.title;
  }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.items$ = this.service.list().pipe(
      catchError(error => {
        this.handleError(error.message);
        return EMPTY;
      })
    )
  }

  // https://stackoverflow.com/questions/52793944/angular-keyvalue-pipe-sort-properties-iterate-in-order
  originalOrder(a, b) {
    return 0;
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  handleError(message) {
    this.alertService.showAlertDanger(message);
  }

}
