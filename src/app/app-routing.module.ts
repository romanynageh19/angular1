import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StartComponent } from './start/start.component';
import { ProtfoloComponent } from './protfolo/protfolo.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"start",component:StartComponent},
  {path:"portfolio",component:ProtfoloComponent},
  {path:"contact",component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
