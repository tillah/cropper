import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CountriesRoutingModule} from './countries-routing.module';
import {CountriesComponent} from './countries.component';
import {UpdateCountryComponent} from './update-country/update-country.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateCountryComponent} from './create-country/create-country.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        CountriesComponent,
        CreateCountryComponent,
        UpdateCountryComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CountriesRoutingModule
    ]
})
export class CountriesModule { }
