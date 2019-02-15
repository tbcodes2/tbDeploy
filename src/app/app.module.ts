import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralNavbarComponent } from './general-navbar/general-navbar.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { ApiService } from './api.service';
import { JiraViewComponent } from './jira-view/jira-view.component';
import { CertificatesViewComponent } from './certificates-view/certificates-view.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    GeneralNavbarComponent,
    UserNavbarComponent,
    RegisterViewComponent,
    LoginViewComponent,
    JiraViewComponent,
    CertificatesViewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
