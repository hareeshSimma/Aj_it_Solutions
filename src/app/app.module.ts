import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { EBooksComponent } from './components/e-books/e-books.component';
import { UsecasesComponent } from './components/usecases/usecases.component';
import { ServicesComponent } from './components/services/services.component';
import { OnlineClassesComponent } from './components/online-classes/online-classes.component';
import { OfflineClassesComponent } from './components/offline-classes/offline-classes.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EBooksComponent,
    UsecasesComponent,
    ServicesComponent,
    OnlineClassesComponent,
    OfflineClassesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
