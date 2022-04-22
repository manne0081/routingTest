import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../01-model/customer';
import { CustomerService } from './homeChild01.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-child01',
  templateUrl: './home-child01.component.html',
  styleUrls: ['./home-child01.component.scss']
})

export class HomeChild01Component implements OnInit {

    customers: Customer[] = []

    constructor(
        private customerService: CustomerService,
        private location: Location,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.getCustomers();
    }

    getCustomers(): void {
        this.customerService.getCustomers().subscribe(customers => this.customers = customers);
    }

    delete(customer: Customer): void {
        this.customerService.deleteCustomer(customer.id).subscribe();
        this.refresh();
    }

    refresh(): void {
		// window.location.reload();
        this.router.navigate(['/home/homeChild02']);
        // this.router.navigate(['/home/homeChild01']);
	}

    goBack(): void {
        console.log('nach löschen zurück...');
    }
}
