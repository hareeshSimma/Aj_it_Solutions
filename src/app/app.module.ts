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
import { VideosComponent } from './components/videos/videos.component';
import { SeekerComponent } from './components/services/seeker/seeker.component';
import { ProviderComponent } from './components/services/provider/provider.component';
import { SupportComponent } from './components/services/support/support.component';
import { InternshipComponent } from './components/services/internship/internship.component';

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
    HomeComponent,
    VideosComponent,
    SeekerComponent,
    ProviderComponent,
    SupportComponent,
    InternshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }