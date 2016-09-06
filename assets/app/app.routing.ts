import { Routes, RouterModule } from "@angular/router";

import { AUTH_ROUTES } from "./auth/auth.routes";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
    { path: '', component: MessagesComponent},
    { path: 'auth', component: AuthenticationComponent, children: [
        ...AUTH_ROUTES
    ] }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);