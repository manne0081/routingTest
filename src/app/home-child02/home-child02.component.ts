import { Component, OnInit } from '@angular/core';

import { Trailer } from '../01-model/trailer';
import { CustomerService } from '../home-child01/homeChild01.service';

@Component({
  selector: 'app-home-child02',
  templateUrl: './home-child02.component.html',
  styleUrls: ['./home-child02.component.scss']
})

export class HomeChild02Component implements OnInit {

    trailers: Trailer[] = []

    constructor(private customerService: CustomerService) { }

    ngOnInit(): void {
        this.getTrailers();
    }

    getTrailers(): void {
        this.customerService.getTrailersFromMock().subscribe(trailers => this.trailers = trailers);
    }

}
