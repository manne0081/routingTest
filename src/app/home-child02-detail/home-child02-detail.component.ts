import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

import { Trailer } from '../01-model/trailer';
import { CustomerService } from '../home-child01/homeChild01.service';

@Component({
  selector: 'app-home-child02-detail',
  templateUrl: './home-child02-detail.component.html',
  styleUrls: ['./home-child02-detail.component.scss']
})

export class HomeChild02DetailComponent implements OnInit {

    trailer: Trailer | undefined;

    manufacturer = new FormControl('');

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private customerService: CustomerService,
        private location: Location,
    ) { }

    ngOnInit(): void {
        this.getTrailer();
    }

    getTrailer(): void {
        const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.customerService.getTrailerFromMock(id).subscribe(trailer => this.trailer = trailer);
    }

    save(): void {
        // if (this.trailer) {
        //     this.customerService.addTrailer(this.trailer)
        //     .subscribe(() => this.goBack());
        // }
    }

    // currently not used...
    goBack(): void {
        this.location.back();
    }
}
