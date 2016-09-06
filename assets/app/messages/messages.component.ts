import { Component } from "@angular/core";

@Component({
    selector: 'my-messages',
    template: `
        <div class="row spacing">
            <my-message-input></my-message-input>
        </div>
        <div class="row spacing">
            <my-message-list></my-message-list>
        </div> 
    `
})
export class MessagesComponent {
    
}