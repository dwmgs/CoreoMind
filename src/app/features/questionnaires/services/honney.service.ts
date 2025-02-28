import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { honney } from '../components/honney/honney';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class HonneyService {

  private urlBase = environment.urlBase;

  constructor(private http: HttpClient){
  }

  validateAnswers(contadores: { [key: string]: number }): boolean {
    const totalRespostas = Object.values(contadores).reduce((a, b) => a + b, 0);
    return totalRespostas > 0;
  }

  calculateHaInstance(contadores: { [key: string]: number }): honney {
    return new honney(
      contadores['P'],
      contadores['T'],
      contadores['A'],
      contadores['R']
    );
  }
}
