import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoadingSpinnerRoutingModule} from './loading-spinner-routing.module';
import {LoadingDataSpinnerComponent} from './loading-data-spinner.component';

@NgModule({
    declarations: [
        LoadingDataSpinnerComponent
    ],
    exports: [
        LoadingDataSpinnerComponent
    ],
    imports: [
        CommonModule,
        LoadingSpinnerRoutingModule
    ]
})
export class LoadingDataSpinnerModule {
}
