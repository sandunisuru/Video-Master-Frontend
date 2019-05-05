import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DownloadComponent } from './download/download.component';

const routes: Routes = [
  {
      path: '',
      component: MainComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
