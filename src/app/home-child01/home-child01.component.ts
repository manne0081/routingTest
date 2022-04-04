import { Component, OnInit } from '@angular/core';
import { Customer } from '../01-model/customer';
import { CustomerService } from './homeChild01.service';

@Component({
  selector: 'app-home-child01',
  templateUrl: './home-child01.component.html',
  styleUrls: ['./home-child01.component.scss']
})

export class HomeChild01Component implements OnInit {

    customers: Customer[] = []

    constructor(private customerService: CustomerService) { }

    ngOnInit(): void {
        this.getCustomers();
    }

    getCustomers(): void {
        this.customerService.getCustomers().subscribe(customers => this.customers = customers);
    }

}
