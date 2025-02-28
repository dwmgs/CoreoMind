import { Component, ViewChild, ElementRef } from '@angular/core';
import { honneyQuestions } from './honney-questions';
import { honney } from './honney';
import { HonneyService } from '../../services/honney.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-honney',
  templateUrl: './honney.component.html',
  styleUrls: ['./honney.component.css']
})
export class HonneyComponent {

  questoes = honneyQuestions;
  honneyAnswers: honney = new honney(0, 0, 0, 0);
  contadores: { [key: string]: number } = { P: 0, T: 0, A: 0, R: 0 };
  showResults = false;

  @ViewChild('doughnutChartCanvas') doughnutChartCanvas!: ElementRef<HTMLCanvasElement>;
  doughnutChart: Chart | undefined;

  constructor(private honneyService: HonneyService) {}

  onChange(event: Event, value: string) {
    const checkbox = event.target as HTMLInputElement;
    this.contadores[value] += checkbox.checked ? 1 : -1;
  }

  submit(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    if (!this.honneyService.validateAnswers(this.contadores)) {
      alert('Por favor, selecione ao menos uma resposta.');
      return;
    }

    this.honneyAnswers = this.honneyService.calculateHaInstance(this.contadores);
    this.showResults = true;
    setTimeout(() => this.renderDoughnutChart(), 0);
  }

  renderDoughnutChart() {
    if (this.doughnutChart) {
      this.doughnutChart.destroy();
    }

    const data = {
      labels: ['Pragmático', 'Teórico', 'Ativo', 'Reflexivo'],
      datasets: [
        {
          label: 'Estilos de Aprendizagem',
          data: [
            this.contadores['P'],
            this.contadores['T'],
            this.contadores['A'],
            this.contadores['R'],
          ],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          hoverOffset: 4,
        },
      ],
    };

    const context = this.doughnutChartCanvas.nativeElement.getContext('2d');
    if (context) {
      this.doughnutChart = new Chart(context, {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
        },
      });
    } else {
      console.error('Não foi possível obter o contexto do canvas.');
    }
  }

}
