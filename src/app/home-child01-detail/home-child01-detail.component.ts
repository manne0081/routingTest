import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { Customer } from '../01-model/customer';
import { CustomerService } from '../home-child01/homeChild01.service';

@Component({
    selector: 'app-home-child01-detail',
    templateUrl: './home-child01-detail.component.html',
    styleUrls: ['./home-child01-detail.component.scss']
  })

export class HomeChild01DetailComponent implements OnInit {

    customer: Customer = {
        id: 0,
        number: '',
        firstName: '',
        lastName: '',
    }
    
    customerForm = this.formBuilder.group({
        id:['', Validators.required],
        number:['', Validators.required],
        firstName:['', Validators.compose([Validators.required, Validators.minLength(5)])],
        lastName:['', Validators.compose([Validators.required, Validators.minLength(5)])],        
    })

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private customerService: CustomerService,
        private location: Location,        
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        console.log('log: homeChild01Detail > ngOnInit...');

        if (this.router.url != "/home/homeChild01/addDetail") {
            console.log('homeChild01Detail > route == editDetail...');
            var id = Number(this.activatedRoute.snapshot.paramMap.get("id"));

            this.customerService.getCustomer(id).subscribe((result) => {                
                this.customer = result;
                this.customerForm.setValue({
                    id: this.customer.id,
                    number: this.customer.number,
                    firstName: this.customer.firstName,
                    lastName: this.customer.lastName,                    
                });
            });
        } else {
            console.log('homeChild01Detail > route == addDetail...');
        }
    }

    save(): void {
        this.customer.id = this.customerForm.get('id')?.value;
        this.customer.number = this.customerForm.get('number')?.value;
        this.customer.firstName = this.customerForm.get('firstName')?.value;
        this.customer.lastName = this.customerForm.get('lastName')?.value;

        if (this.router.url != "/home/homeChild01/addDetail") {
            this.update();
        } else {
            this.add();
        }
        
    }

    update(): void {
        if (this.customer) {
          this.customerService.updateCustomer(this.customer)
            .subscribe(() => this.goBack());
        }
    }

    add(): void {
        if (this.customer) {
            this.customerService.addCustomer(this.customer)
              .subscribe(() => this.goBack());
        }
    }

    goBack(): void {
        // this.location.back();
        this.router.navigate(['/home/homeChild01']);
    }
}

