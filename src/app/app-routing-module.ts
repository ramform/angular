import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HeroDetailsComponent} from "./hero-details/hero-details.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroFormComponent} from "./hero-form/hero-form.component";
import {SizerParentComponent} from "./sizer/sizer-parent.component";

const routes: Routes = <Routes>[
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'heroes', component: HeroesComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailsComponent},
    {path: 'form', component: HeroFormComponent},
    {path: 'size', component: SizerParentComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}