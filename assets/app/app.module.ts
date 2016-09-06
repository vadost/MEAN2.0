import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { MessageService } from "./messages/message.service";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { HeaderComponent } from "./header.component";
import { ROUTING } from "./app.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AuthService } from "./auth/auth.service";
import { ErrorService } from "./errors/error.service";
import { ErrorComponent } from "./errors/error.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessagesComponent,
        MessageInputComponent,
        AuthenticationComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [BrowserModule, ROUTING, FormsModule, ReactiveFormsModule, HttpModule],
    bootstrap: [AppComponent],
    providers: [MessageService, AuthService, ErrorService]
})
export class AppModule {

}