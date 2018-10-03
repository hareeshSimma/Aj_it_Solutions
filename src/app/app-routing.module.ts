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
import { VideosComponent } from './components/videos/videos.component';
import { SeekerComponent } from './components/services/seeker/seeker.component';
import { ProviderComponent } from './components/services/provider/provider.component';
import { SupportComponent } from './components/services/support/support.component';
import { InternshipComponent } from './components/services/internship/internship.component';

const routes: Routes = [
  { path:'', component:HomeComponent },  
  { path:'ebooks', component:EBooksComponent },
  { path:'usecases', component:UsecasesComponent },
  { path:'services', component:ServicesComponent ,
  children:[
    { path:'', component:SeekerComponent },
    
    { path:'freelanching', children:[
      { path:'', component:SeekerComponent },
      { path:'seeker', component:SeekerComponent },     
      { path:'provider', component:ProviderComponent }, 
    ]
    

},
{ path:'support', component:SupportComponent },
{ path:'internship', component:InternshipComponent },

]
},

  { path:'olinetrainings', component:OnlineClassesComponent },
  { path:'offlinetrainings', component:OfflineClassesComponent },
  { path:'videos', component:VideosComponent },

  

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
