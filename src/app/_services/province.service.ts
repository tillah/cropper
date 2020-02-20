import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Province} from '../_models/province';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProvinceService {

    provinces: Province[] = [
        {id: 235253, countryId: 2, name:'wtweqt'}
    ];
    // baseUrl = environment.apiUrl + 'provinces';

    constructor(private httpClient: HttpClient) {
    }

    findAll(): Observable<Province[]> {
        // return this.httpClient.get<Province[]>(this.baseUrl).pipe(
        //     map(provinces => {
        //         return provinces;
        //     })
        // );
        return of(this.provinces);
    }

    save(province: Province): Observable<Province> {
        // return this.httpClient.post<Province>(this.baseUrl, province);
        this.provinces.push(province);
        return of(province);
    }
}
