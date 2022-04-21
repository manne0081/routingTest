import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    
    testForm = new FormControl('');

    testFormGroup = new FormGroup({
        id2: new FormControl(''),
        number2: new FormControl(''),
        firstName2: new FormControl(''),
        lastName2: new FormControl(''),
    });
    
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private customerService: CustomerService,
        private location: Location,        
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        console.log('log: homeChild01Detail > ngOnInit...');
        this.testForm.setValue('test1');
                
        if (this.router.url != "/home/homeChild01/addDetail") {
            var id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
            console.log('homeChild01Detail > route == editDetail... ID: ' + id);

            this.customerService.getCustomer(id).subscribe((result) => {                
                this.customer = result;

                console.log('result: ' + result.firstName + ', ' + result.lastName + ', ' + result.number);

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

    

    // getCustomer(): void {
    //     const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    //     this.customerService.getCustomer(id).subscribe(customer => this.customer = customer);
    // }

    save(): void {
        this.customer.id = this.customerForm.get('id')?.value;
        this.customer.number = this.customerForm.get('number')?.value;
        this.customer.firstName = this.customerForm.get('firstName')?.value;
        this.customer.lastName = this.customerForm.get('lastName')?.value;

        this.customerService.addCustomer(this.customer).subscribe();
        // this.router.navigate(['/home/homeChild01']);
    }

    goBack(): void {
        this.location.back();
    }
}

