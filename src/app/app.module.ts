import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterializeModule} from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContatoComponent,
    SobrenosComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
