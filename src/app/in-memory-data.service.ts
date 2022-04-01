import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { Customer } from './01-model/customer';

@Injectable({
    providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {        
        const customers: Customer[] = [
            { 'id': 0, 'firstName': 'Dagobert', 'lastName': 'Duck' },
            { 'id': 1, 'firstName': 'Daniel', 'lastName': 'Düsentrieb' },
            { 'id': 2, 'firstName': 'Gustav', 'lastName': 'Gans' },
            { 'id': 3, 'firstName': 'Kater', 'lastName': 'Karlo' },
            { 'id': 4, 'firstName': 'Daisy', 'lastName': 'Duck' },
            { 'id': 5, 'firstName': 'Franz', 'lastName': 'Gans' },
            { 'id': 6, 'firstName': 'Tick', 'lastName': 'Duck' },
            { 'id': 7, 'firstName': 'Dieter', 'lastName': 'Düsentrieb' },
            { 'id': 8, 'firstName': 'Trick', 'lastName': 'Duck' },
            { 'id': 9, 'firstName': 'Mac', 'lastName': 'Moneysac' },
            { 'id': 10, 'firstName': 'Gundel', 'lastName': 'Gaukeley' },
            { 'id': 11, 'firstName': 'Klaas', 'lastName': 'Klever' },
        ]
        return { customers };
    }
    constructor() { }
}




        
    
