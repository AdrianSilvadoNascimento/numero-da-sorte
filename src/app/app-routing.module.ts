import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MegaPage } from './core/page-mega/mega.component'


const routes: Routes = [
  { path: '', component: MegaPage }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
