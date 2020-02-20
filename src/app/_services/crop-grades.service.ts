import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CropGrade} from '../_models/crop-grade';
import {Observable, of} from 'rxjs';

@Injectable({ providedIn: 'root'})

export class CropGradesService {
  crops: CropGrade[] = [
    {
      id: 1111,
     name: 'gradeD',
     price: 1000,
     cropVarietyId: 9001,
     cropId: 12345
    }
];
  constructor() { }
}
