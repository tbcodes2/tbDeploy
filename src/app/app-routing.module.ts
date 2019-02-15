import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { GeneralNavbarComponent } from './general-navbar/general-navbar.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { CertificatesViewComponent } from './certificates-view/certificates-view.component';
import { JiraViewComponent } from './jira-view/jira-view.component';



const routes: Routes = [
  {
    path:'login',
    component: LoginViewComponent
  },
  {
    path:'register',
    component: RegisterViewComponent,
  },
  {
    path:'certificados',
    component: CertificatesViewComponent,
  },
  {
    path:'jira',
    component: JiraViewComponent,
  },

  { path:'**', 
  redirectTo:'login',
  pathMatch:'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

