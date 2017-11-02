import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        //$.getScript('../../../assets/js/material-dashboard.js');
        $.getScript('../../../assets/js/initMenu.js');
    }
}