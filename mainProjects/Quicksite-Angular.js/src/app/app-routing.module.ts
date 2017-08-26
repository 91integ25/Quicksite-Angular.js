import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// test comment
const routes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
