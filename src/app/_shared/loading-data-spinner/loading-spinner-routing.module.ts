import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoadingDataSpinnerComponent} from './loading-data-spinner.component';

const routes: Routes = [
    {
        path: '',
        component: LoadingDataSpinnerComponent,
        data: {
            title: 'Loading Spinner'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingSpinnerRoutingModule { }
