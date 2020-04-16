import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { of } from 'rxjs';
import { Course } from '../courses/course';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverGuard implements Resolve<Course>{

  constructor(
    private injector: Injector,
  ) {

  }

  // https://alligator.io/angular/route-guards/
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var serviceName = route.parent.url[0].path;
    console.log(serviceName);
    var crudConfig = this.injector.get(serviceName); 
    var service = this.injector.get(crudConfig.service);    

    if(route.params && route.params['id']) {
      return service.loadById(route.params['id']);
    }

    // var novoCurso: Curso = {id: null, name: null};
    return of(null);
  }
  


}
