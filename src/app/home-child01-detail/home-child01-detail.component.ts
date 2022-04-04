import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Customer } from '../01-model/customer';
import { CustomerService } from '../home-child01/homeChild01.service';

@Component({
    selector: 'app-home-child01-detail',
    templateUrl: './home-child01-detail.component.html',
    styleUrls: ['./home-child01-detail.component.scss']
  })

export class HomeChild01DetailComponent implements OnInit {

    customer: Customer | undefined;

    // customerForm = this.formBuilder.group({
    //     id:['', Validators.required],
    //     firstName:['', Validators.compose([Validators.required, Validators.minLength(5)])],
    //     lastName:['', Validators.compose([Validators.required, Validators.minLength(5)])],        
    // });

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private customerService: CustomerService,
        private location: Location,
        // private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.getCustomer();
    }

    getCustomer(): void {
        const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.customerService.getHero(id).subscribe(customer => this.customer = customer);
    }

    save(): void {
        if (this.customer) {
            this.customerService.updateCustomer(this.customer)
            .subscribe(() => this.goBack());
        }
    }

    goBack(): void {
        this.location.back();
    }
}

