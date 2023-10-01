import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdoptComponent } from './pages/adopt/adopt.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'adoção', component: AdoptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
