import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-module',
    template: '<router-outlet></router-outlet>',
})
export class ModuleComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
