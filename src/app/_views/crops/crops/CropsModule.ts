import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CropsComponent } from './crops.component';
import { CropsRoutingModule } from '../crops-routing.module';
@NgModule({
    declarations: [
        CropsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CropsRoutingModule
    ]
})
export class CropsModule {
}
