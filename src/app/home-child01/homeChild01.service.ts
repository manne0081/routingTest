import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';

import { Customer } from '../01-model/customer';
import { Trailer } from '../01-model/trailer';
import { TRAILERS } from '../02-mock-data/mock-trailers';

@Injectable({
    providedIn: 'root'
})

export class CustomerService {

    constructor(private httpClient: HttpClient) {}
    
    customersUrl: string = "/api/customers";
    trailersUrl: string = "/api/trailers";
    
    // === GET ALL customers from the server (in-memory-web-api) ===
    getCustomers(): Observable<Customer[]> {
        var response = this.httpClient.get<Customer[]>(this.customersUrl);
        console.log(response);   
        return response;
    }

    // === GET ONE customer from the server (in-memory-web-api) ===
    getCustomer(id: number): Observable<Customer> {
        const url = `${this.customersUrl}/${id}`;
        return this.httpClient.get<Customer>(url).pipe();
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

    /** PUT: update the hero on the server */
    // updateCustomer(customer: Customer): Observable<any> {
    //     return this.httpClient.put(this.customersUrl, customer, this.httpOptions).pipe(
    //         tap(_ => this.log(`updated hero id=${customer.id}`)),
    //         catchError(this.handleError<any>('updateHero'))
    //     );
    // }

    addCustomer(customer: Customer): Observable<Customer> {
        var response = this.httpClient.post<Customer>(this.customersUrl, customer);
        return response;
    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

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

    /** POST: add a new hero to the server */
    // addTrailer(hero: Trailer): Observable<Trailer> {
    //     return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
    //         tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
    //         catchError(this.handleError<Hero>('addHero'))
    //     );
    // }
}