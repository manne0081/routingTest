import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { Customer } from './01-model/customer';
import { Trailer } from './01-model/trailer';

@Injectable({
    providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
    createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {
        const customers: Customer[] = [
            { 'id': 0, 'number': 'CU-1000001', 'firstName': 'Dagobert', 'lastName': 'Duck' },
            { 'id': 1, 'number': 'CU-1000002', 'firstName': 'Daniel', 'lastName': 'Düsentrieb' },
            { 'id': 2, 'number': 'CU-1000003', 'firstName': 'Gustav', 'lastName': 'Gans' },
            { 'id': 3, 'number': 'CU-1000004', 'firstName': 'Kater', 'lastName': 'Karlo' },
            { 'id': 4, 'number': 'CU-1000005', 'firstName': 'Daisy', 'lastName': 'Duck' },
            { 'id': 5, 'number': 'CU-1000006', 'firstName': 'Franz', 'lastName': 'Gans' },
            { 'id': 6, 'number': 'CU-1000007', 'firstName': 'Tick', 'lastName': 'Duck' },
            { 'id': 7, 'number': 'CU-1000008', 'firstName': 'Dieter', 'lastName': 'Düsentrieb' },
            { 'id': 8, 'number': 'CU-1000009', 'firstName': 'Trick', 'lastName': 'Duck' },
            { 'id': 9, 'number': 'CU-10000010', 'firstName': 'Mac', 'lastName': 'Moneysac' },
            { 'id': 10, 'number': 'CU-10000011', 'firstName': 'Gundel', 'lastName': 'Gaukeley' },
            { 'id': 11, 'number': 'CU-10000012', 'firstName': 'Klaas', 'lastName': 'Klever' },
            { 'id': 12, 'number': 'CU-10000013', 'firstName': 'Klaas', 'lastName': 'Klever' },
            { 'id': 13, 'number': 'CU-10000014', 'firstName': 'Klaas', 'lastName': 'Klever' },
            { 'id': 14, 'number': 'CU-10000015', 'firstName': 'Klaas', 'lastName': 'Klever' },
        ]
        return { customers };    
    }
    
    constructor() { }
}




        
    
