import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { Page404Component } from './page404/page404.component';


export const routes: Routes = [
    {path: "accueil", component: AccueilComponent},
    {path: "to-do-list", component: ToDoListComponent },
    {path: "", redirectTo: "accueil", pathMatch: 'full' },
    {path: "**", component: Page404Component}
];
