

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateCropsRoutingModule } from './create-crop-routing.module';

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CreateCropsRoutingModule
    ]
})
export class CreateCropGradesModule { }
