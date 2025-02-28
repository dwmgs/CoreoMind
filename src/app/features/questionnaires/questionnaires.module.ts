import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HonneyComponent } from './components/honney/honney.component';
import { VarkComponent } from './components/vark/vark.component';

import { HonneyService } from './services/honney.service';
import { VarkService } from './services/vark.service';



@NgModule({
  declarations: [
    HonneyComponent,
    VarkComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HonneyComponent,
    VarkComponent
  ],
  providers: [
    HonneyService,
    VarkService
  ]
})
export class QuestionnairesModule { }
