import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {

  items$;
  serviceName;
  service;

  constructor(
    private injector: Injector,
    private route: ActivatedRoute,
  ) { 
    this.serviceName = route.snapshot.parent.url[0].path;
    this.service = injector.get(this.serviceName);

    console.log(this.serviceName);
    console.log(this.service);
  }

  ngOnInit(): void {
    this.items$ = this.service.list();
  }

  // https://stackoverflow.com/questions/52793944/angular-keyvalue-pipe-sort-properties-iterate-in-order
  originalOrder(a, b) {
    return 0;
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

}
