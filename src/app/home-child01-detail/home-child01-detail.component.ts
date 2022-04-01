import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { Customer } from '../01-model/customer';
import { CustomerService } from '../home-child01/homeChild01.service';

@Component({
    selector: 'app-home-child01-detail',
    templateUrl: './home-child01-detail.component.html',
    styleUrls: ['./home-child01-detail.component.scss']
  })
export class HomeChild01DetailComponent implements OnInit {

    customer: Customer = {
        id: 4,
        firstName: 'Max',
        lastName: 'Mustermann',
    }

    customerForm = this.formBuilder.group({
        id:['', Validators.required],
        firstName:['', Validators.compose([Validators.required, Validators.minLength(5)])],
        lastName:['', Validators.compose([Validators.required, Validators.minLength(5)])],
        
    })

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private customerService: CustomerService,
        private formBuilder: FormBuilder) { }

        ngOnInit(): void {
            if (this.router.url != "homeChild01/detail") {
                var id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    
                this.customerService.getCustomerById(id).subscribe((result) => {                
                    this.customer = result;
                    this.customerForm.setValue({
                        id: this.customer.id,
                        firstName: this.customer.firstName,
                        lastName: this.customer.lastName,
                    });
                });
            }        
        }

}

