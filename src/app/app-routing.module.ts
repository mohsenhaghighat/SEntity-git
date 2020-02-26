import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ShowComponent } from './show/show.component';


const routes: Routes = [
  {path:'',redirectTo: '/crud' , pathMatch:'full'},
  {path: 'crud',component: CrudComponent },
  {path: 'show',component:ShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
