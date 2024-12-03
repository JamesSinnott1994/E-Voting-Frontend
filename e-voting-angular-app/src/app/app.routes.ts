import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HistorypageComponent } from './historypage/historypage.component';
import { PrstvpageComponent } from './prstvpage/prstvpage.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent }, // Homepage route
    { path: 'history', component: HistorypageComponent }, // e-Voting History route
    { path: 'prstv', component: PrstvpageComponent }, // PR-STV Explainer page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule  {}