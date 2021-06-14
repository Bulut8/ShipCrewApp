import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewDetailComponent } from './pages/shipcrew/crew-detail/crew-detail.component';
import { CrewListComponent } from './pages/shipcrew/crew-list/crew-list.component';

const routes: Routes = [
{
  component:CrewDetailComponent,
  path:"crew-detail/:id"
},
{
  component:CrewListComponent,
  path:""
}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
