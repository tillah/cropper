import {Component, OnInit} from '@angular/core';
import {Province} from '../../_models/province';
import {ProvinceService} from '../../_services/province.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-provinces',
    templateUrl: './provinces.component.html',
    styleUrls: ['./provinces.component.css']
})
export class ProvincesComponent implements OnInit {

    provinces: Province[] = [];

    constructor(
        private router: Router,
        private provinceService: ProvinceService
    ) { }

    ngOnInit() {
        this.findAll();
    }

    onCreate() {
        this.router.navigate(['/create-province']).then();
    }

    findAll() {
        this.provinceService.findAll().subscribe((provincesFromBackEnd: Province[]) => {
            this.provinces = provincesFromBackEnd;
        });
    }
}
