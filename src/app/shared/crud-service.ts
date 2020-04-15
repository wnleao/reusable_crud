import { HttpClient } from '@angular/common/http';
import { tap, take } from 'rxjs/operators';

export class CrudService<T> {

    constructor(protected http: HttpClient, protected API_URL: string) { }
  
    loadById(id) {
      return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
    }
  
    list() {
      return this.http.get<T[]>(this.API_URL);
    }
  
    update(record: T) {
      return this.http.put(`${this.API_URL}/${record['id']}`, record).pipe(take(1));
    }
  
    create(record: T) {
      return this.http.post(this.API_URL, record).pipe(take(1));
    }
  
    save(record: T) {
      return record['id'] ? this.update(record) : this.create(record);
    }
  
    delete(id) {
      return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
    }

}