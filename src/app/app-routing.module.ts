import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routing modules

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EBooksComponent } from './components/e-books/e-books.component';
import { UsecasesComponent } from './components/usecases/usecases.component';
import { ServicesComponent } from './components/services/services.component';
import { OnlineClassesComponent } from './components/online-classes/online-classes.component';
import { OfflineClassesComponent } from './components/offline-classes/offline-classes.component';

const routes: Routes = [
  { path:'', component:HomeComponent },  
  { path:'ebooks', component:EBooksComponent },
  { path:'usecases', component:UsecasesComponent },
  { path:'services', component:ServicesComponent },
  { path:'olineclasses', component:OnlineClassesComponent },
  { path:'offlineclasses', component:OfflineClassesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
