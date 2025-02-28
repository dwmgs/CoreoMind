import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class MetaLearningService {

  private urlBase = environment.urlBase;
  
    constructor(private http: HttpClient){}
}
