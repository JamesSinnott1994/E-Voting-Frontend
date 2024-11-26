import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HistorypageComponent } from './historypage/historypage.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent }, // Homepage route
    { path: 'history', component: HistorypageComponent }, // e-Voting History route
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule  {}