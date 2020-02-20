import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DefaultLayoutComponent} from './containers';
import {ProvincesComponent} from './_views/provinces/provinces.component';
import {ProvinceResolver} from './_resolvers/province-resolver.service';
import {CreateProvinceComponent} from './_views/provinces/create-province/create-province.component';
import {CreateCountryComponent} from './_views/countries/create-country/create-country.component';
import {CountriesComponent} from './_views/countries/countries.component';
import { CreateCropComponent } from './_views/crops/create-crop/create-crop.component';
import { CountryResolver } from './_resolvers/country-resolver.service';
import { CropsComponent } from './_views/crops/crops/crops.component';
import { CropGradesComponent } from './_views/cropgrades/crop-grades/crop-grades.component';
import { CropsResolver } from './_resolvers/crops-resolver.service';
import { CropGradesResolver } from './_resolvers/crop-grades-resolver.service';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full', },
    {
        path: '',
        component: DefaultLayoutComponent,
        data: { title: 'Home' },
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            { path: 'provinces', component: ProvincesComponent, resolve: { provincesData: ProvinceResolver } },
            { path: 'create-province', component: CreateProvinceComponent },
            { path: 'create-country', component: CreateCountryComponent },
            { path: 'countries', component: CountriesComponent, resolve: { countriesData: CountryResolver }},
            { path: 'crops', component: CropsComponent, resolve: { cropsData: CropsResolver }},
            { path: 'cropgrades', component: CropGradesComponent, resolve: { cropGradesData: CropGradesResolver }},
            { path: 'create-crop', component: CreateCropComponent },
            { path: '**', component: CropsComponent, resolve: { cropsData: CropsResolver }},

            // {
            //     path: 'batch-details/:clientBatchReference',
            //     component: BatchDetailsComponent,
            //     resolve: { batchData: LoadBatchByClientBatchReferenceResolverService }
            // },
            // { path: 'transactions', component: TransactionsComponent, resolve: { transactionsData: LoadTransactionsResolverService } },
            // {
            //     path: 'settings',
            //     loadChildren: () => import('./views/settings/settings.module').then(m => m.SettingsModule)
            // },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
