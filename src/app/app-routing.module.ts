import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './features/components/home/home.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { SignupComponent } from './features/auth/components/signup/signup.component';
import { ForgotComponent } from './features/auth/components/forgot/forgot.component';
import { LayoutComponent } from './features/components/layout/layout.component';
import { LobbyComponent } from './features/components/lobby/lobby.component';
import { HonneyComponent } from './features/questionnaires/components/honney/honney.component';
import { VarkComponent } from './features/questionnaires/components/vark/vark.component';
import { MetaLearningComponent } from './features/choreographies/components/meta-learning/meta-learning.component';
import { DidacticsComponent } from './features/choreographies/components/didactics/didactics.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotPassword', component: ForgotComponent },
  { path: 'client', component: LayoutComponent, children: [
      { path: 'honney-alonso', component:HonneyComponent },
      { path: 'vark', component:VarkComponent },
      { path: 'meta-aprendizagem', component:MetaLearningComponent },
      { path: 'didatica', component:DidacticsComponent },
      { path: 'lobby', component:LobbyComponent },
      { path: '', redirectTo: '/client/lobby', pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled', 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
