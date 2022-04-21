import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Customer } from '../01-model/customer';
import { Trailer } from '../01-model/trailer';
import { TRAILERS } from '../02-mock-data/mock-trailers';

@Injectable({
    providedIn: 'root'
})

export class CustomerService {

    constructor(private httpClient: HttpClient) {}
    
    customersUrl: string = "/api/customers";
    
    // === GET ALL customers from the server (in-memory-web-api) ===
    // ### From Angular IO Hero > Tutorial ###
    getCustomers(): Observable<Customer[]> {
        return this.httpClient.get<Customer[]>(this.customersUrl)
            .pipe (
                tap(_ => this.log('fetch customers')),
                catchError(this.handleError<Customer[]>('getCustomers', []))
            );
    }

    // === GET ONE customer from the server (in-memory-web-api) ===
    getCustomer(id: number): Observable<Customer> {
        const url = `${this.customersUrl}/${id}`;
        return this.httpClient.get<Customer>(url).pipe(
            tap(_ => this.log(`fetched Customer id=${id}`)),
            catchError(this.handleError<Customer>(`getCustomer id=${id}`))
        );
    }

    /** PUT: update the hero on the server */
    updateCustomer(customer: Customer): Observable<any> {
        return this.httpClient.put(this.customersUrl, customer, this.httpOptions).pipe(
            tap(_ => this.log(`updated hero id=${customer.id}`)),
            catchError(this.handleError<any>('updateHero'))
        );
    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    /** POST: add a new hero to the server */
    addCustomer(customer: Customer): Observable<Customer> {
        return this.httpClient.post<Customer>(this.customersUrl, customer, this.httpOptions).pipe(
            tap((newCustomer: Customer) => this.log(`added Customer w/ id=${newCustomer.id}`)),
            catchError(this.handleError<Customer>('addCustomer'))
        );
    }

    

    /** DELETE: delete the hero from the server */
    deleteCustomer(id: number): Observable<Customer> {
        console.log('test...');
        const url = `${this.customersUrl}/${id}`;
    
        return this.httpClient.delete<Customer>(url, this.httpOptions).pipe(
            tap(_ => this.log(`deleted Customer id=${id}`)),
            catchError(this.handleError<Customer>('deleteCustomer'))
        );
    }



    // === GET ALL trailer from the mock-file === 
    getTrailersFromMock(): Observable<Trailer[]> {
        const trailer = of(TRAILERS);
        return trailer;
    }

    // === GET ONE trailer from the mock-file === 
    getTrailerFromMock(id: number): Observable<Trailer> {
        const trailer = TRAILERS.find(h => h.id === id)!;
        return of(trailer);
    }

    private log(message: string): void {
        // this.messageService.add(`HeroService: fetched hero id=${message}`)
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
     private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }

}