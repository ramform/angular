import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {HeroService} from "./hero.service";
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {AppRoutingModule} from "./app-routing-module";
import { HeroFormComponent } from './hero-form/hero-form.component';
import {SizerComponent} from "./sizer/sizer.component";
import {SizerParentComponent} from "./sizer/sizer-parent.component";
import {HighLightDirective} from "./highLight.directive";

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailsComponent,
        DashboardComponent,
        HeroFormComponent,
        SizerComponent,
        SizerParentComponent,
        HighLightDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
