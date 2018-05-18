import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { QuotesComponent } from './quotes/quotes.component';
import { WriteComponent } from './write/write.component';

const routes: Routes = [
  {path: '', component: AuthorsComponent},
  {path: 'new', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'quotes/:id', component: QuotesComponent},
  {path: 'write/:id', component: WriteComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
