import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {LocationStrategy, HashLocationStrategy, CommonModule} from '@angular/common';

import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

import {AppComponent} from './app.component';

import {DefaultLayoutComponent} from './containers';

const APP_CONTAINERS = [
    DefaultLayoutComponent
];

import {
    AppAsideModule,
    AppBreadcrumbModule,
    AppHeaderModule,
    AppFooterModule,
    AppSidebarModule,
} from '@coreui/angular';

import { AppRoutingModule} from './app.routing';
// import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
// import { TabsModule} from 'ngx-bootstrap/tabs';
import { HttpClientModule} from '@angular/common/http';
// import { BsDatepickerModule, ModalModule} from 'ngx-bootstrap';
import { LoadingDataSpinnerModule} from './_shared/loading-data-spinner/loading-data-spinner.module';
import { MatPaginatorModule} from '@angular/material/paginator';
import {ProvinceResolver} from './_resolvers/province-resolver.service';
import {ProvincesModule} from './_views/provinces/provinces.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CountriesModule} from './_views/countries/countries.module';
import { CountryResolver } from './_resolvers/country-resolver.service';
import { CropsComponent } from './_views/crops/crops/crops.component';
import { CropsModule as CropsModule } from './_views/crops/crops/cropsmodule';
import { CropsResolver } from './_resolvers/crops-resolver.service';
import { CropGradesResolver } from './_resolvers/crop-grades-resolver.service';
import { CropGradesComponent } from './_views/cropgrades/crop-grades/crop-grades.component';
// import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AppAsideModule,
        // BsDatepickerModule.forRoot(),
        AppBreadcrumbModule.forRoot(),
        AppFooterModule,
        AppHeaderModule,
        AppSidebarModule,
        HttpClientModule,
        MatPaginatorModule,
        PerfectScrollbarModule,
        LoadingDataSpinnerModule,
        ProvincesModule,
        CountriesModule,
        CropsModule
        // ModalModule.forRoot(),
        // BsDropdownModule.forRoot(),
        // TabsModule.forRoot(),
        // PaginationModule.forRoot()
    ],
    declarations: [
        AppComponent,
        ...APP_CONTAINERS,
        CropGradesComponent,
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        ProvinceResolver,
        CountryResolver,
        CropsResolver,
        CropGradesResolver
    ],
    entryComponents: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
