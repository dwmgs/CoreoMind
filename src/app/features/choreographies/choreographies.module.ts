import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MetaLearningComponent } from './components/meta-learning/meta-learning.component';
import { DidacticsComponent } from './components/didactics/didactics.component';

import { MetaLearningService } from './services/meta-learning.service';
import { DidacticsService } from './services/didactics.service';



@NgModule({
  declarations: [
    MetaLearningComponent,
    DidacticsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MetaLearningComponent,
    DidacticsComponent
  ],
  providers: [
    MetaLearningService,
    DidacticsService
  ]
})
export class ChoreographiesModule { }
