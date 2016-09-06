import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
@Component({
    selector: 'my-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a [routerLink]="['']">Messages</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['auth']">Authentication</a></li>
                </ul>
            </nav>
        </header>
    `,
    styles: [`
        header {
            margin-bottom: 20px;
        }
    
        ul {
          text-align: center;  
        }
        
        li {
            float: none;
            display: inline-block;
        }
        
        .router-link-active {
            background-color: #337ab7;
            color: white;
        }
    `]
})
export class HeaderComponent {
    
}