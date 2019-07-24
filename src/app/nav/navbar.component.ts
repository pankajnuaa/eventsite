import { Component } from '@angular/core';

@Component({
    selector: 'nav-app',
    templateUrl: './navbar.component.html',
    styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 10px;}
    @media (max-width:1200px){#searchForm {display: none}}
    `]
})
export class NavComponent {

}
