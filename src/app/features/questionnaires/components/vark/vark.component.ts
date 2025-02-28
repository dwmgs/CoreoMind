import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { varkQuestions } from './vark-questions';
import { vark } from './vark';
import { VarkService } from '../../services/vark.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-vark',
  templateUrl: './vark.component.html',
  styleUrls: ['./vark.component.css']
})
export class VarkComponent implements AfterViewInit{

  questions = varkQuestions; 
  currentQuestionIndex = 0;
  varkAnswers: vark = new vark(0, 0, 0, 0); 
  answers: UserAnswer[] = []; 
  isCompleted = false; 

  @ViewChild('doughnutChartCanvas') doughnutChartCanvas!: ElementRef<HTMLCanvasElement>;
  doughnutChart: any; 

  constructor(private varkService: VarkService) {}

  answerQuestion(selectedOption: string) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    this.answers.push({ questionId: currentQuestion.id, selectedOption });

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.isCompleted = true;
      setTimeout(() => this.showResults(), 0); 
    }
  }

  showResults() {
    const resultCounts = this.varkService.calculateResults(this.answers);
    this.varkAnswers = this.varkService.createVarkInstance(resultCounts);
    this.renderDoughnutChart(resultCounts);
  }

  renderDoughnutChart(resultCounts: any) {
    if (this.doughnutChart) {
      this.doughnutChart.destroy();
    }

    const data = {
      labels: ['Visual', 'Auditivo', 'Sinestésico', 'Leitura/Escrita'],
      datasets: [{
        label: 'Estilos de Aprendizagem',
        data: [
          resultCounts.Visual,
          resultCounts.Auditivo,
          resultCounts.Sinestesico,
          resultCounts.LeituraEscrita
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverOffset: 4
      }]
    };

    const context = this.doughnutChartCanvas.nativeElement.getContext('2d');
    if (context) {
      this.doughnutChart = new Chart(context, {
        type: 'doughnut',
        data,
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'top' }
          }
        }
      });
    } else {
      console.error('Não foi possível obter o contexto do canvas.');
    }
  }

  ngAfterViewInit() {
    if (!this.doughnutChartCanvas) {
      console.error('Elemento canvas não encontrado!');
    }
  }
}

interface UserAnswer {
  questionId: number;
  selectedOption: string;
}

