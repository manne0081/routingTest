import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-child02',
  templateUrl: './home-child02.component.html',
  styleUrls: ['./home-child02.component.scss']
})

export class HomeChild02Component implements OnInit {

    storageTrailor:String[] = [
        'Anhänger 1',
        'Anhänger 2',
        'Anhänger 3',
        'Anhänger 4',
        'Anhänger 5',
        'Anhänger 6',
        'Anhänger 7',
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
