import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { vark } from '../components/vark/vark';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class VarkService {

  public urlBase = environment.urlBase;

  constructor(private http: HttpClient){
  }

  calculateResults(answers: UserAnswer[]) {
    const resultCounts = { Visual: 0, Auditivo: 0, Sinestesico: 0, LeituraEscrita: 0 };

    answers.forEach(answer => {
      switch (answer.selectedOption) {
        case 'a':
          resultCounts.Visual++;
          break;
        case 'b':
          resultCounts.Auditivo++;
          break;
        case 'c':
          resultCounts.Sinestesico++;
          break;
        default:
          resultCounts.LeituraEscrita++;
      }
    });

    return resultCounts;
  }

  createVarkInstance(resultCounts: any): vark {
    return new vark(
      resultCounts.Visual,
      resultCounts.Auditivo,
      resultCounts.Sinestesico,
      resultCounts.LeituraEscrita
    );
  }
}

interface UserAnswer {
  questionId: number;
  selectedOption: string;

}

