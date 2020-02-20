import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProvincesRoutingModule} from './provinces-routing.module';
import {CreateProvinceComponent} from './create-province/create-province.component';
import {ProvincesComponent} from './provinces.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        ProvincesComponent,
        CreateProvinceComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        ProvincesRoutingModule
    ]
})
export class ProvincesModule {
}
