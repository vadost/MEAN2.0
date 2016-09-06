import { Component } from "@angular/core";

import { MessageService } from "./message.service";
import { Message } from "./message";
import { NgForm } from "@angular/forms";
import { ErrorService } from "../errors/error.service";

@Component({
    selector: 'my-message-input',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                <div class="form-group">
                    <label for="content">Content</label>
                    <input name="content" [ngModel]="message?.content" type="text" class="form-control" id="content" #input>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
        </section>
    `
})
export class MessageInputComponent {
    message:Message = null;

    constructor(private messageService:MessageService, private errorService: ErrorService) {
    }

    onSubmit(form: NgForm) {
        if (this.message) {
            // Edit
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(
                    data => console.log(data),
                    error => this.errorService.handleError(error)
                );
            this.message = null;
        } else {
            const message:Message = new Message(form.value.content, null, 'Dummy');
            this.messageService.addMessage(message)
                .subscribe(
                    data => {
                        console.log(data);
                        this.messageService.messages.push(data);
                    },
                    error => this.errorService.handleError(error)
                );
        }
        form.reset();
    }

    onCancel() {
        this.message = null;
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            message => {
                this.message = message;
            }
        );
    }
}