import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { PostComponent } from './post/post/post.component';
import { SpecificComponent } from './specific/specific.component';

const routes: Routes = [
  { path: 'all-photos', component: AllComponent },
  { path: 'specific-photos', component: SpecificComponent },
  { path: 'posts', component: PostComponent },
  { path: '', redirectTo: 'all-photos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
