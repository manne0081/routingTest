import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Customer } from '../01-model/customer';
import { Customers } from '../02-mock-data/mock-customer';

@Injectable({
    providedIn: 'root'
})

export class CustomerService {

    constructor(private httpClient: HttpClient) {}
    
    customersUrl: string = "/api/customers";

    getCustomers(): Observable<Customer[]> {
        var response = this.httpClient.get<Customer[]>(this.customersUrl);
        console.log(response);   
        return response;
    }

    getCustomerById(id: number): Observable<Customer> {
        var response = this.httpClient.get<Customer>(this.customersUrl + "/" + id);
        return response;
    }
}