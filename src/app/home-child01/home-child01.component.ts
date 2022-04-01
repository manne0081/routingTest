import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-child01',
  templateUrl: './home-child01.component.html',
  styleUrls: ['./home-child01.component.scss']
})

export class HomeChild01Component implements OnInit {

    customer:String[] = [
        'Kunde 1',
        'Kunde 2',
        'Kunde 3',
        'Kunde 4',
        'Kunde 5',
        'Kunde 6',
        'Kunde 7',
        'Kunde 8',
        'Kunde 9',
        'Kunde 10',
        'Kunde 11',
        'Kunde 12',
        'Kunde 13',
        'Kunde 14',
        'Kunde 15',
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
