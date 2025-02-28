import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { AuthModule } from './features/auth/auth.module';
import { QuestionnairesModule } from './features/questionnaires/questionnaires.module';
import { TemplateModule } from './features/template/template.module';
import { ChoreographiesModule } from './features/choreographies/choreographies.module';

import { LayoutComponent } from './features/components/layout/layout.component';
import { HomeComponent } from './features/components/home/home.component';
import { LobbyComponent } from './features/components/lobby/lobby.component';


@NgModule({
  declarations: [
    AppComponent,    
    LayoutComponent,
    HomeComponent,
    LobbyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TemplateModule,
    AuthModule,
    QuestionnairesModule,
    ChoreographiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
