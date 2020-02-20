import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Province} from '../_models/province';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import { Crop } from '../_models/crop';

@Injectable({ providedIn: 'root' })
export class CropService {

    crops: Crop[] = [
        {id: 235253,  name:'Crop 1'}
    ];
    // baseUrl = environment.apiUrl + 'provinces';

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<Crop[]> {
        // return this.httpClient.get<Province[]>(this.baseUrl).pipe(
        //     map(provinces => {
        //         return provinces;
        //     })
        // );
        return of(this.crops);
    }

    save(province: Province): Observable<Crop> {
        // return this.httpClient.post<Province>(this.baseUrl, province);
        this.crops.push(province);
        return of(province);
    }
}
